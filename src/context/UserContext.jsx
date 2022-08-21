import api from "../services/api";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const dashboard = useHistory();
  const record = useHistory();
  const login = useHistory();
  const user = JSON.parse(localStorage.getItem("@user"));
  const token = localStorage.getItem("@token-login");

  const [localToken, setLocalToken] = useState([]);

  const [modal, setModal] = useState(0);

  const [techs, setTechs] = useState([]);

  const onSubmitLogin = async (data) => {
    const id = toast.loading("Carregando");

    await api
      .post("/sessions", data)
      .then((response) => {
        console.log(response);
        localStorage.setItem("@token-login", `${response.data.token}`);
        localStorage.setItem("@user", JSON.stringify(response.data.user));
        setTechs(response.data.user.techs);

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
      .catch((err) => {
        toast.update(id, {
          render: "Senha ou e-mail inválido",
          type: "error",
          isLoading: false,
          autoClose: 1000,
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const CadastroRealizado = () => {
    toast.success("Cadastro realizado com sucesso");
  };

  const onSubmitRecord = async (data) => {
    await api
      .post("/users", data)
      .then((response) => {
        login.push("/", {
          message: "Cadastro realizado com sucesso",
        });

        CadastroRealizado();
      })
      .catch((err) => console.log(err));
  };

  const onSubmitCreateTech = async (data) => {
    const id = toast.loading("Carregando");
    await api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const result = response.data;
        setTechs([...techs, result]);

        toast.update(id, {
          render: "Tecnologia adicionada com sucesso",
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
      })
      .catch((err) => {
        toast.update(id, {
          render: "Tecnologia já existente",
          type: "error",
          isLoading: false,
          autoClose: 1000,
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const Apagar = async (key, techId) => {
    console.log(key, techId);
    console.log(token);

    await api
      .delete(`/users/techs/${techId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setTechs(techs?.filter((elem) => elem.title !== key));
      })

      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider
      value={{
        localToken,
        setLocalToken,
        onSubmitLogin,
        record,
        login,
        onSubmitRecord,
        modal,
        setModal,
        onSubmitCreateTech,
        user,
        techs,
        setTechs,
        Apagar,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
