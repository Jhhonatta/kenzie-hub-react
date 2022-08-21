import * as yup from "yup";

const FormSchemaLogin = yup.object().shape({
  email: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export default FormSchemaLogin;
