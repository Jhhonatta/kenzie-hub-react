import { DivDashboard } from "./style";
import { useHistory } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import { CgTrash } from "react-icons/cg";
import { toast } from "react-toastify";

import ModalTechRegistration from "../../components/modalregistration/modalTechRegistration";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Dashboard = ({ setLocalToken }) => {
  const { modal, setModal, user, techs, setTechs, Apagar } =
    useContext(UserContext);

  const login = useHistory();

  const Logout = () => {
    toast.success("Não demore a voltar");
  };

  // const Delete = (key, techId) => {
  //   setTechs(techs?.filter((elem) => elem.title !== key));
  //   console.log(key, techId);
  // };

  return (
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
                message: "Este usuário deslogou",
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
                        Apagar(elem.title, elem.id);
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
  );
};

export default Dashboard;
