import { Modal } from "../modal";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editData, editSchema } from "./validators";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useAuthContext } from "../../providers/AuthProvider";
import { StyledModalOptions } from "./style";

export default function ModalEditContact({
  toggleModal,
  contact,
  getContacts,
  deleteContact,
  editContact,
}) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<editData>({
    resolver: zodResolver(editSchema),
    mode: "onBlur",
    defaultValues: {
      name: contact.name,
      email: contact.email,
      telephone: contact.telephone,
    },
  });

  async function editThisContact(data: editData) {
    await editContact(contact.id, { ...data });
    toggleModal();
  }

  async function deleteThisContact() {
    await deleteContact(contact.id);
    toggleModal();
  }

  return (
    <Modal toggleModal={toggleModal}>
      <StyledModalOptions>
        <h2>Editar contato</h2>
        <form onSubmit={handleSubmit(editThisContact)}>
          <TextField
            label="Nome"
            variant="outlined"
            inputProps={{ ...register("name") }}
          />
          {errors.name && <small>{errors.name.message}</small>}

          <TextField
            label="Email"
            variant="outlined"
            inputProps={{ ...register("email") }}
            color="primary"
          />
          {errors.email && <small>{errors.email.message}</small>}

          <TextField
            label="Telefone"
            variant="outlined"
            inputProps={{ ...register("telephone") }}
          />
          {errors.telephone && <small>{errors.telephone.message}</small>}

          <Button variant="contained" type="submit">
            Editar este contato
          </Button>

          <Button onClick={deleteThisContact} variant="contained" color="error">
            Deletar este contato
          </Button>
        </form>
      </StyledModalOptions>
    </Modal>
  );
}
