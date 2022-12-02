import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const formSchema = yup.object({
  name: yup
    .string()
    .min(4, "Your Name must have minimum 4 letters")
    .required("Please Enter Your Name"),
  password: yup
    .string()
    .min(6, "Your Password must have minimum 6 letters")
    .required("Please Enter Your Password"),
  email: yup
    .string()
    .email("Please Enter Valid Email")
    .required("Please Enter Your Email"),
  contact: yup
    .string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(10, "too long"),
});
