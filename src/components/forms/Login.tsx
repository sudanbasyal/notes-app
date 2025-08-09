import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { LoginValues } from "../../interface/auth";
import * as Yup from "yup";
import TextField from "../ui/TextField";
import Button from "../ui/Button";

const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string().required("Password is required").min(6),
});
type LoginFormProps = {
  onSubmit: (
    values: LoginValues,
    formikHelpers: FormikHelpers<LoginValues>
  ) => void;
};
const initialValues = {
  email: "",
  password: "",
};
const LoginForm = ({ onSubmit }: LoginFormProps) => {
  return (
    <Formik<LoginValues>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={LoginSchema}
    >
      {({ isSubmitting }) => {
        return (
          <Form className="flex flex-col gap-2">
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
            <Button
              type="submit"
              text="Login"
              css="w-full mt-2"
              disabled={isSubmitting}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
