import { Containerlogin } from "./style";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { BsEye } from "react-icons/bs";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

import FormSchemaLogin from "../../validations/validationLogin";

const Login = () => {
  const { onSubmitLogin, record } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchemaLogin),
  });

  return (
    <Containerlogin onSubmit={handleSubmit(onSubmitLogin)}>
      <h1>Kenize Hub</h1>
      <form>
        <p>Login</p>
        <label> Email</label>

        <input
          type="email"
          placeholder="Email cadastrado"
          {...register("email")}
        />
        <p className="error"> {errors?.email?.message as unknown as string}</p>

        <label>Senha</label>
        <div className="divPassword">
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <BsEye />
        </div>
        <p className="error">
          {errors?.password?.message as unknown as string}
        </p>
        <button type="submit">Entrar</button>
        <span>Ainda não possui uma conta?</span>

        <button
          className="buttonCadastro"
          onClick={() => {
            record.push("/record", {
              message: "Esta usuário não possui cadastro",
            });
          }}
        >
          Cadastre-se
        </button>
      </form>
    </Containerlogin>
  );
};

export default Login;
