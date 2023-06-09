import { useState } from "react";
import { UserProvider } from "../../providers/UserProvider";
import ContactsList from "./components/ContactsList";
import { DashboardContainer } from "./style";
import ModalOptions from "../../components/modalOptions";
import ModalEditContact from "../../components/modalEditContact";
import { useAuthContext } from "../../providers/AuthProvider";
import { iContact, useContactContext } from "../../providers/ContactsProvider";
import { RiLogoutBoxRFill } from "react-icons/ri";

export default function DashboardPage() {
  const [isOpenModalOptions, setModalOptions] = useState(false);
  const [isOpenModalContact, setModalContact] = useState(false);
  const [contactToBeEdited, setContactToBeEdited] = useState<null | iContact>(
    null
  );

  const { logout } = useAuthContext();
  const { getContacts, deleteContact, editContact } = useContactContext();

  const toggleOptionsModal = () => setModalOptions(!isOpenModalOptions);
  const toggleContactModal = (contact: iContact) => {
    setModalContact(!isOpenModalContact);
    setContactToBeEdited(contact);
  };

  return (
    <UserProvider>
      <DashboardContainer>
        <header>
          <h1 onClick={toggleOptionsModal}>Contact Keeper</h1>
          <button onClick={logout}>
            <RiLogoutBoxRFill size={30} color="#fff" />
          </button>
        </header>

        {isOpenModalOptions && (
          <ModalOptions toggleModal={toggleOptionsModal} />
        )}

        {isOpenModalContact && (
          <ModalEditContact
            toggleModal={toggleContactModal}
            contact={contactToBeEdited}
            getContacts={getContacts}
            deleteContact={deleteContact}
            editContact={editContact}
          />
        )}

        <main>
          <ContactsList toggleModalContact={toggleContactModal} />
        </main>
      </DashboardContainer>
    </UserProvider>
  );
}
