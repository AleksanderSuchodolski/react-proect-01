import { User } from '../User/User';

export function UsersList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <User user={user} />
        </li>
      ))}
    </ul>
  );
}
