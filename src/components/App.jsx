import { Section } from './Section/Section';
import { User } from './User/User';
import { data } from '../data/users';
import { UsersList } from './UsersList/UsersList';

export const App = () => {
  return (
    <>
      <Section>
        <User user={data[0]} />
      </Section>

      <Section title="Users">
        <UsersList users={data} />
      </Section>
    </>
  );
};
