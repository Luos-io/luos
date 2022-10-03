import { createContext, ReactElement, useState, useCallback } from 'react';

import { useInterval } from 'utils/hooks';

import type { AlertColor } from '@mui/material/Alert';

const INTERVAL = 1000;
const DEFAULT_TIMEOUT = 8000;

export interface Notification {
  id: string;
  message: string | ReactElement;
  variant?: AlertColor;
  image?: string;
  timeout?: number;
  timestamp: string;
}

type NotificationsContextType = {
  notifications: Notification[];
  addNotifications: (notifications: Notification[]) => void;
  removeNotifications: (url: string, ids: string[]) => void;
};

export const NotificationsContext = createContext<NotificationsContextType>({
  notifications: [],
  addNotifications: () => null,
  removeNotifications: () => null,
});

type NotificationsProviderProps = {
  children: ReactElement;
};
interface INotificationsProvider {
  (props: NotificationsProviderProps): ReactElement;
}
export const NotificationsProvider: INotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotifications = useCallback(
    (newNotifications: Notification[]) => {
      const timestamp = new Date().getTime().toString();
      setNotifications([
        ...notifications,
        ...newNotifications.map((n) => ({
          ...n,
          id: n.id || timestamp.toString(),
          variant: n.variant || 'success',
          image: n.image || 'default.png',
          timeout: n.timeout || DEFAULT_TIMEOUT,
          timestamp,
        })),
      ]);
    },
    [notifications, setNotifications],
  );
  const removeNotifications = useCallback(
    (url: string, ids: string[]) => {
      ids.map((id) => {
        const currentNotificationIndex = notifications.findIndex(
          (n) => n.id.toString() === id.toString(),
        );
        if (currentNotificationIndex !== -1) {
          // Update DB 'notified' field without awaiting the result to avoid blocking the UI
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              badgeId: id,
              notified: true,
            }),
          });
        }
      });
      setNotifications(notifications.filter((n) => !ids.includes(n.id)));
    },
    [notifications, setNotifications],
  );

  useInterval(
    useCallback(
      (currentTime: any) => {
        if (notifications.length) {
          const expiredIds = notifications.reduce((acc, n) => {
            const isExpired = parseInt(n.timestamp) <= currentTime - (n.timeout || DEFAULT_TIMEOUT);
            return isExpired && n.timeout !== null ? acc.concat(n.id) : acc;
          }, [] as string[]);
          if (expiredIds.length > 0) {
            removeNotifications(`/api/db/updateUserBadge`, expiredIds);
          }
        }
      },
      [notifications, removeNotifications],
    ),
    INTERVAL,
  );

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        addNotifications,
        removeNotifications,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
export default NotificationsProvider;
