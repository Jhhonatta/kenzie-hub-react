import * as yup from "yup";

const FormSchemaRecord = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^(?=.*[A-Z])/, "Deve conter uma letra maiúscula")
    .matches(
      /^(?=.*[$*&@#!])/,
      "Deve conter ao menos um caracter especial($ * & @ # !)"
    )
    .min(8, "Deve conter ao menos 8 caracteres"),
  confirmarSenha: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas incompatíveis"),
  contact: yup.string().required("Campo obrigatório"),
  bio: yup.string().required("Campo obrigatório"),
});

export default FormSchemaRecord;
