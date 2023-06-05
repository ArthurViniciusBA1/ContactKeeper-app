import { StyledContactItem } from "../style";
import { iContact } from "./ContactsList";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

interface iProps {
  contact: iContact;
}

export default function ContactListCard({ contact }: iProps) {
  function phoneOnClick() {
    window.open(`tel:${contact.telephone}`);
  }

  function mailOnClick() {
    window.open(`mailto:${contact.email}`);
  }

  const displayName =
    contact.name.length > 15 ? contact.name.slice(0, 15) + "..." : contact.name;

  return (
    <StyledContactItem>
      <div className="contact-info">
        <div>
          <h3>{displayName}</h3>
        </div>
        <div>
          <MdEmail />
          <p>{contact.email}</p>
        </div>
        <div>
          <BsTelephoneFill />
          <p>{contact.telephone}</p>
        </div>
      </div>
      <div className="contact-actions">
        <button
          type="button"
          name={`Call ${contact.name}`}
          onClick={phoneOnClick}
        >
          <BsTelephoneFill />
        </button>
        <button
          type="button"
          name={`Mail ${contact.name}`}
          onClick={mailOnClick}
        >
          <MdEmail />
        </button>
      </div>
    </StyledContactItem>
  );
}
