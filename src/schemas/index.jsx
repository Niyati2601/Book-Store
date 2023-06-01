import * as Yup from "yup";

export const RegistrationSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email("Invalid email").required("Email required"),
  contact: Yup.number().required("Please enter your number!"),
});
