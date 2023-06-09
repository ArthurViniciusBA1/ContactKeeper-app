import { Modal } from "../modal";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editData, editSchema } from "./validators";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useAuthContext } from "../../providers/AuthProvider";
import { StyledModalEditContact } from "./style";

export default function ModalOptions({ toggleModal }) {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<editData>({
    resolver: zodResolver(editSchema),
    mode: "onBlur",
    defaultValues: {
      name: user.name,
      email: user.email,
      telephone: user.telephone,
    },
  });

  async function editUser(data) {
    const response = await api.patch("users", { ...data });

    toggleModal();
  }

  async function deleteUser() {
    try {
      await api.delete("users");
      toggleModal();
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal toggleModal={toggleModal}>
      <StyledModalEditContact>
        <h2>Editar dados</h2>
        <form onSubmit={handleSubmit(editUser)}>
          <TextField
            label="Email"
            variant="outlined"
            inputProps={{ ...register("email") }}
            color="primary"
          />
          {errors.email && <small>{errors.email.message}</small>}

          <TextField
            label="Nome"
            variant="outlined"
            inputProps={{ ...register("name") }}
          />
          {errors.name && <small>{errors.name.message}</small>}

          <TextField
            label="Telefone"
            variant="outlined"
            inputProps={{ ...register("telephone") }}
          />
          {errors.telephone && <small>{errors.telephone.message}</small>}

          <Button variant="contained" type="submit">
            Editar dados
          </Button>

          <Button onClick={deleteUser} variant="contained" color="error">
            Deletar conta
          </Button>
        </form>
      </StyledModalEditContact>
    </Modal>
  );
}
