// import api from "../../services/api";

import { DivRecord } from "./style";

import { useForm } from "react-hook-form";

// import { useHistory } from "react-router-dom";

// import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import FormSchemaRecord from "../../validations/validationRecord";

const Record = () => {
  const { login, onSubmitRecord } = useContext(UserContext);

  // const FormSchema = yup.object().shape({
  //   name: yup.string().required("Campo obrigatório"),
  //   email: yup.string().required("Campo obrigatório").email("Email inválido"),
  //   password: yup
  //     .string()
  //     .min(8, "É necessário 8 caractéres")
  //     .matches(
  //       /^(?=.*[A-Z])[0-9a-zA-Z$*&@#]{1,}$/,
  //       "Deve conter um letra Maiuscula"
  //     )
  //     .matches(/^(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{1,}$/, "Deve ter um caracter"),
  //   confirmarSenha: yup
  //     .string()
  //     .oneOf([yup.ref("password")], "Senhas incompatíveis"),
  //   contact: yup.string().required("Campo obrigatório"),
  //   bio: yup.string().required("Campo obrigatório"),
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchemaRecord),
  });

  console.log(errors);

  // const login = useHistory();

  // const CadastroRealizado = () => {
  //   toast.success("Cadastro realizado com sucesso");
  // };

  // const onSubmitRecord = async (data) => {
  //   await api
  //     .post("/users", data)
  //     .then((response) => {
  //       login.push("/", {
  //         message: "Cadastro realizado com sucesso",
  //       });

  //       CadastroRealizado();
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <DivRecord onSubmit={handleSubmit(onSubmitRecord)}>
      <div className="logoAndButton">
        <p>Kenzie Hub</p>
        <button
          onClick={() => {
            login.push("/", {
              message: "Este usuário voltou para a página de login",
            });
          }}
        >
          Voltar
        </button>
      </div>
      <form>
        <h3>Crie sua conta</h3>
        <h4>Rápido e grátis, vamos nessa</h4>
        <label>
          Nome
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <p> {errors.name?.message}</p>
        </label>

        <label>
          Email
          <input
            type="text"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </label>

        <label>
          Senha
          <input
            type="password"
            placeholder="Criar senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </label>

        <label>
          Confirmar Senha
          <input
            type="password"
            placeholder="Confirmar senha"
            {...register("confirmarSenha")}
          />
          <p>{errors.confirmarSenha?.message}</p>
        </label>

        <label>
          Bio
          <input
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <p>{errors.bio?.message}</p>
        </label>

        <label>
          Contato
          <input
            type="text"
            placeholder="Opoção de contato"
            {...register("contact")}
          />
          <p>{errors.contact?.message}</p>
        </label>

        <label>Selecionar módulo</label>
        <select {...register("course_module")}>
          <option>Primeiro módulo</option>
          <option>Segundo módulo</option>
          <option>Terceiro módulo</option>
        </select>
        <button>Cadastrar</button>
      </form>
    </DivRecord>
  );
};

export default Record;
