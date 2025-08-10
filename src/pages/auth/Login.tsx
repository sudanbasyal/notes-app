import { FormikHelpers } from "formik";
import LoginForm from "../../components/forms/Login";
import withAuthCard from "../../components/withAuthCard";
import { LoginValues } from "../../interface/auth";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/auth/authService";
import { useDispatch } from "react-redux";
import { authTokenChange } from "../../features/auth/authSlice";
import { toast } from "sonner";
import { errorHandler } from "../../lib/utils";
import useUser from "../../hooks/useUser";

const Login = () => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const { updateUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (
    values: LoginValues,
    { setSubmitting }: FormikHelpers<LoginValues>
  ) => {
    try {
      const res = await login(values).unwrap();
      dispatch(
        authTokenChange({
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        })
      );
      updateUser(res.data.user)
      navigate("/notes");
      toast.success("Login successful!");
    } catch (error) {
      errorHandler(error, "Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section className="flex flex-col gap-2 sm:gap-4">
      <LoginForm onSubmit={handleLogin} />
      <p className="text-body2 text-reading-1 text-center">
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
