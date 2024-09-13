import { getUser } from "@/lib/async-storage";
import { User } from "@/types/user";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type UserContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};
const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const useUserContext = () => useContext(UserContext);

type Props = {
  children: ReactNode;
};
export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser()
      .then((user) => setUser(user))
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
