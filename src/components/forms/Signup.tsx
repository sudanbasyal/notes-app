import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { SignupValues } from "../../interface/auth";
import TextField from "../ui/TextField";
import Button from "../ui/Button";

const signupSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8)
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Must contain at least one special character"
    ),
  confirm_password: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

type SignupFormProps = {
  onSubmit: (
    values: SignupValues,
    formikHelpers: FormikHelpers<SignupValues>
  ) => void;
};

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignupForm = ({ onSubmit }: SignupFormProps) => {
  return (
    <Formik<SignupValues>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={signupSchema}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-2">
          <TextField
            label="Name"
            variant="bordered"
            name="name"
            type="text"
            css="text-left"
          />
          <TextField
            label="Email"
            variant="bordered"
            name="email"
            type="email"
            css="text-left"
          />
          <TextField
            label="Password"
            variant="bordered"
            name="password"
            type="password"
            css="text-left"
          />
          <TextField
            label="Confirm Password"
            variant="bordered"
            name="confirm_password"
            type="password"
            css="text-left"
          />
          <Button
            type="submit"
            text="Login"
            css="w-full mt-2"
            disabled={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
