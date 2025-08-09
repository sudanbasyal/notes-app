import { FormikHelpers } from "formik";
import LoginForm from "../../components/forms/Login";
import withAuthCard from "../../components/withAuthCard";
import { LoginValues } from "../../interface/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (
    values: LoginValues,
    { setSubmitting }: FormikHelpers<LoginValues>
  ) => {
    console.log(values);
  };
  return (
    <section className="flex flex-col gap-2 sm:gap-4">
      <LoginForm onSubmit={handleLogin} />
      <p className="text-body2 text-reading-1 dark:text-reading-1-dark">
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="text-info">
          Create Account
        </Link>
      </p>
    </section>
  );
};

export default withAuthCard(
  Login,
  "Sign in to EasyNotes",
  "Simplify your notes and boost your productivity"
);
