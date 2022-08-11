import api from "../../services/api";
import { toast } from "react-toastify";

import { Containerlogin } from "./style";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { BsEye } from "react-icons/bs";

const Login = ({ setLocalToken }) => {
  const FormSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  console.log(errors);

  const Fracasso = () => {
    toast.error("Falha ao relizar o login");
  };

  const onSubmit = async (data) => {
    const id = toast.loading("Carregando");

    await api
      .post("/sessions", data)
      .then((response) => {
        localStorage.setItem("@token-login", `${response.data.token}`);
        localStorage.setItem("@user", JSON.stringify(response.data.user));
        setLocalToken([1]);

        toast.update(id, {
          render: "Login realizado",
          type: "success",
          isLoading: false,
          autoClose: 1000,
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        dashboard.push("/dashboard", {
          message: "Este usuário está cadstrado",
        });
      })
      .catch((err) => console.log(err));
  };

  const record = useHistory();
  const dashboard = useHistory();

  return (
    <Containerlogin onSubmit={handleSubmit(onSubmit)}>
      <h1>Kenize Hub</h1>
      <form>
        <p>Login</p>
        <label> Email</label>

        <input
          type="email"
          placeholder="Email cadastrado"
          {...register("email")}
        />
        <p className="error"> {errors.email?.message}</p>

        <label>Senha</label>
        <div className="divPassword">
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <BsEye />
        </div>
        <p className="error">{errors.password?.message}</p>
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
