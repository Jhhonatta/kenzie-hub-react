import { DivDashboard } from "./style";

import { GrAdd } from "react-icons/gr";
import { CgTrash } from "react-icons/cg";
import { toast } from "react-toastify";

import ModalTechRegistration from "../../components/modalregistration/modalTechRegistration";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Dashboard = () => {
  const { modal, setModal, user, techs, DeleteTech, login, setLocalToken } =
    useContext(UserContext);

  const Logout = () => {
    toast.success("Não demore a voltar");
  };

  return user ? (
    <DivDashboard>
      <header>
        <div className="divHeader">
          <p>Kenzie Hub</p>
          <button
            onClick={() => {
              localStorage.clear();
              Logout();
              setLocalToken([]);
              login.push("/", {
                message: "Este usuário voltou para a página de login",
              });
            }}
          >
            Sair
          </button>
        </div>
      </header>
      <div className="subHeader">
        <div>
          <h1>Olá, {user?.name}</h1>
          <p>{user?.course_module}</p>
        </div>
      </div>
      <main>
        <div>
          <p>Tecnologias</p>
          <button onClick={() => (modal === 0 ? setModal(1) : setModal(0))}>
            <GrAdd />
          </button>
        </div>
        {techs.length > 0 ? (
          <ul>
            {techs?.map((elem) => {
              return (
                <li key={elem.id}>
                  <h1>{elem.title}</h1>
                  <div className="divDelete">
                    <p>{elem.status}</p>
                    <button
                      onClick={() => {
                        DeleteTech(elem.title, elem.id);
                      }}
                      className="delete"
                    >
                      <CgTrash />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Nenhuma tecnologia cadastrada</p>
        )}
      </main>
      {modal === 1 ? <ModalTechRegistration /> : false}
    </DivDashboard>
  ) : (
    login.push("/")
  );
};

export default Dashboard;
