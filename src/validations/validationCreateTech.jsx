import * as yup from "yup";

const FormSchemaCreate = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),
});

export default FormSchemaCreate;
