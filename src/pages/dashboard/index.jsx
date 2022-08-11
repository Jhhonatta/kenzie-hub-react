import { DivDashboard } from "./style";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

const Dashboard = ({ setLocalToken }) => {
  const login = useHistory();

  const user = JSON.parse(localStorage.getItem("@user"));

  const Logout = () => {
    toast.success("Não demore a voltar");
  };

  return (
    <DivDashboard>
      <header>
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
      </header>
      <div className="subHeader">
        <div>
          <h1>Olá, {user.name}</h1>
          <p>{user.course_module}</p>
        </div>
      </div>
      <main>
        <h1>Que pena! Estamos em desenvolvimento :(</h1>
        <h3>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </h3>
      </main>
    </DivDashboard>
  );
};

export default Dashboard;
