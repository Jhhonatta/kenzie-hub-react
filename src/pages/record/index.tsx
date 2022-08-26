import { DivRecord } from "./style";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import FormSchemaRecord from "../../validations/validationRecord";

const Record = () => {
  const { login, onSubmitRecord } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchemaRecord),
  });

  console.log(errors);

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
          <p> {errors?.name?.message as unknown as string}</p>
        </label>

        <label>
          Email
          <input
            type="text"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <p>{errors?.email?.message as unknown as string}</p>
        </label>

        <label>
          Senha
          <input
            type="password"
            placeholder="Criar senha"
            {...register("password")}
          />
          <p>{errors.password?.message as unknown as string}</p>
        </label>

        <label>
          Confirmar Senha
          <input
            type="password"
            placeholder="Confirmar senha"
            {...register("confirmarSenha")}
          />
          <p>{errors.confirmarSenha?.message as unknown as string}</p>
        </label>

        <label>
          Bio
          <input
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <p>{errors.bio?.message as unknown as string}</p>
        </label>

        <label>
          Contato
          <input
            type="text"
            placeholder="Opoção de contato"
            {...register("contact")}
          />
          <p>{errors.contact?.message as unknown as string}</p>
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
