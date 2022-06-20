import { Role } from 'types/user';

const parsedRoles: string[] = [];
for (const role in Role) {
  const parsed = parseInt(role, 10);
  if (isNaN(parsed)) {
    parsedRoles.push(role);
  }
}

export const getRoleValue = (id: Role) => parsedRoles[id] || 0;
