import * as yup from "yup";

const FormSchemaRecord = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório").email("Email inválido"),
  password: yup
    .string()
    .min(8, "É necessário 8 caractéres")
    .matches(
      /^(?=.*[A-Z])[0-9a-zA-Z$*&@#]{1,}$/,
      "Deve conter um letra Maiuscula"
    )
    .matches(/^(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{1,}$/, "Deve ter um caracter"),
  confirmarSenha: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas incompatíveis"),
  contact: yup.string().required("Campo obrigatório"),
  bio: yup.string().required("Campo obrigatório"),
});

export default FormSchemaRecord;
