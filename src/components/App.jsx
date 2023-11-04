import { Section } from "./Section/Section";
import {User} from "./User/User";
import {data} from "../data/users"
export const App = () => {
  return (
  <Section title="User"><User user={data[0]}/></Section>
  );
};
