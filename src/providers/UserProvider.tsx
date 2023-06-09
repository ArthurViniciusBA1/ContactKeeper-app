import { ReactNode, useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface iUserProvider {}

const UserContext = createContext<iUserProvider>({} as iUserProvider);

export function UserProvider({ children }: Props) {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
}

export const useUserContext = () => useContext(UserContext);
