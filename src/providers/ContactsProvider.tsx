import {
  ReactNode,
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export interface iContact {
  id: string;
  name: string;
  email: string;
  telephone: string;
  created_at: string;
  patched_at: string;
  user_uuid: string;
}

interface Props {
  children: ReactNode;
}

interface iContactProvider {
  contacts: iContact[];
  getContacts: () => void;
  deleteContact: (contactId: string) => void;
  editContact: (contactId: string, data: iContact) => void;
}

const ContactContext = createContext<iContactProvider>({} as iContactProvider);

export function ContactProvider({ children }: Props) {
  const [contacts, setContacts] = useState<iContact[]>([]);

  useEffect(() => {
    (async () => {
      await getContacts();
    })();
  }, []);

  async function getContacts() {
    const response = await api.get<iContact[]>("/contacts");

    setContacts(response.data);
  }

  async function deleteContact(contactId: string) {
    try {
      await api.delete(`contacts/${contactId}`);

      getContacts();
    } catch (error) {
      console.error(error);
    }
  }

  async function editContact(contactId, data) {
    try {
      await api.patch(`contacts/${contactId}`, { ...data });

      getContacts();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ContactContext.Provider
      value={{ contacts, getContacts, deleteContact, editContact }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export const useContactContext = () => useContext(ContactContext);
