import { DivRecord } from "./style";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

import FormSchemaRecord from "../../validations/validationRecord";

import { useState } from "react";
import * as yup from "yup";
import { ChangeEvent } from "react";
import { ValidationError } from "yup";

const Record = () => {
  const { login, onSubmitRecord } = useContext(UserContext);
  const [valuePassword, setValuePassword] = useState<boolean | string>(false);
  const [valueConfirmPassword, SetValueConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordMatch, setPasswordMatch] = useState<string | boolean>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchemaRecord),
  });

  const verifyPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;

    yup
      .reach(FormSchemaRecord, "password")
      .validate(password)
      .then(() => {
        setPasswordStrength("Senha válida.");
        setValuePassword(password);
      })
      .catch((error: ValidationError) => {
        setPasswordStrength(error.message);
      });
  };

  const comparingPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const confirmarSenha = event.target.value;

    console.log(valuePassword, confirmarSenha);
    setPasswordMatch(valuePassword === confirmarSenha);
    SetValueConfirmPassword(event.target.value);
  };

  console.log(errors);

  useEffect(() => {
    setPasswordMatch(valuePassword === valueConfirmPassword);
  }, [valuePassword, valueConfirmPassword]);

  return (
    <DivRecord onSubmit={handleSubmit(onSubmitRecord)}>
      <div className="containerFull">
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
          <div className="containerLabel">
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
                onChange={verifyPassword}
              />
              <p>{passwordStrength}</p>
            </label>

            <label>
              Confirmar Senha
              <input
                type="password"
                placeholder="Confirmar senha"
                {...register("confirmarSenha")}
                onChange={(event) => {
                  comparingPassword(event);
                }}
              />
              {(!valueConfirmPassword && !valuePassword && (
                <p>Digite as senhas!</p>
              )) ||
                (!passwordMatch && <p>Senhas incompatíveis.</p>) ||
                (passwordMatch === true && <p>Senhas compatíveis.</p>)}
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
          </div>
          <button>Cadastrar</button>
        </form>
      </div>
    </DivRecord>
  );
};

export default Record;
