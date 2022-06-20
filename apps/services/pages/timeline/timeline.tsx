import { useSession } from 'next-auth/react';
import Error403 from 'components/layout/errors/403/403';

export const Timeline = () => {
  const { data: session, status } = useSession();

  if (!session && status === 'unauthenticated') {
    return <Error403 />;
  }
  return <div>timeline</div>;
};
export default Timeline;
