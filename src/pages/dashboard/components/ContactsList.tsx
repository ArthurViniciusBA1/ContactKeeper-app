import { StyledContactList } from "../style";
import ContactListCard from "./ContactListCard";
import { useContactContext } from "../../../providers/ContactsProvider";

export default function ContactsList({ toggleModalContact }) {
  const { contacts } = useContactContext();

  return (
    <StyledContactList>
      {contacts.map((contact) => (
        <ContactListCard
          contact={contact}
          key={contact.id}
          toggleModal={toggleModalContact}
        />
      ))}
    </StyledContactList>
  );
}
