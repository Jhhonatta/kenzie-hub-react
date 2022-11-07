import api from "../services/api";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { createContext, useState } from "react";

import { ReactNode } from "react";

export interface IData {
  email: string;
  password: ReactNode;
}

export interface Tech {
  id: string;
  title: string;
  status: string;
  user: {
    id: string;
  };
  created_at: string;
  upated_at: string;
}

interface IWork {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  user: {
    id: string;
  };
  created_at: string;
  updated_at: string;
}

interface IDataCreateTech {
  title: string;
  status: string;
}

interface IDataRecord {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserObjects {
  course_module: ReactNode;
  name: ReactNode;
  user: {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    techs: Tech[];
    works: IWork[];
    created_at: string;
    updated_at: string;
    avatar_url: null;
  };
}

interface IUserContext {
  localToken: number[];
  setLocalToken: (data: number[]) => void;
  onSubmitLogin: (data: any) => Promise<void>;
  record: any;
  login: any;
  dashboard: any;
  onSubmitRecord: (data: any) => Promise<void>;
  modal: number;
  setModal: (data: number) => void;
  onSubmitCreateTech: (data: any) => Promise<void>;
  user: IUserObjects;
  techs: Tech[];
  setTechs: (data: Tech[]) => void;
  DeleteTech: (key: string, techId: string) => Promise<void>;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

function UserProvider({ children }: IUserProviderProps) {
  const dashboard = useHistory();
  const record = useHistory();
  const login = useHistory();

  const token = localStorage.getItem("@token-login");

  const user: IUserObjects = JSON.parse(localStorage.getItem("@user") || "{}");

  const [localToken, setLocalToken] = useState<number[]>([]);

  const [modal, setModal] = useState(0);

  const [techs, setTechs] = useState<Tech[]>([]);

  const onSubmitLogin = async (data: IData) => {
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

        dashboard.replace("/dashboard", {
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

  const onSubmitRecord = async (data: IDataRecord) => {
    const id = toast.loading("Carregando");

    await api
      .post("/users", data)
      .then((response) => {
        login.push("/", {
          message: "Cadastro realizado com sucesso",
        });

        toast.update(id, {
          render: "Cadastro realizado com sucesso",
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

        login.push("/");
      })
      .catch((err) => {
        toast.update(id, {
          render: "Este e-mail, já está em uso",
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

  const onSubmitCreateTech = async (data: IDataCreateTech) => {
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

  const DeleteTech = async (key: string, techId: string) => {
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
        dashboard,
        onSubmitRecord,
        modal,
        setModal,
        onSubmitCreateTech,
        user,
        techs,
        setTechs,
        DeleteTech,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
