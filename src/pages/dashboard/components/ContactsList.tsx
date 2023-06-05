import { useEffect, useState } from "react";
import { api } from "../../../services/api";

interface iContact {
  id: string;
  name: string;
  email: string;
  telephone: string;
  created_at: string;
  patched_at: string;
  user_uuid: string;
}

export default function ContactsList() {
  const [contacts, setContacts] = useState<iContact[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get<iContact[]>("contacts");

      setContacts(response.data);
    })();
  }, []);

  return (
    <ul>
      {contacts.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  );
}
