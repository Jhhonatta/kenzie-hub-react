import { Modal } from "./style";
import { useForm } from "react-hook-form";
import FormSchemaCreate from "../../validations/validationCreateTech";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";

const ModalTechRegistration = () => {
  const { setModal, onSubmitCreateTech } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchemaCreate),
  });

  return (
    <Modal onSubmit={handleSubmit(onSubmitCreateTech)}>
      <div className="divHead">
        <p>Cadastrar tecnologia</p>
        <button onClick={() => setModal(0)}>x</button>
      </div>

      <div className="divBotton">
        <label>
          Nome
          <input
            type="text"
            placeholder="Nova tecnologia"
            {...register("title")}
          />
          <p>{errors?.title?.message as unknown as string}</p>
        </label>
        <label>
          Selecionar status
          <select {...register("status")}>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
        </label>
        <button>Cadastrar Tecnologia</button>
      </div>
    </Modal>
  );
};

export default ModalTechRegistration;
