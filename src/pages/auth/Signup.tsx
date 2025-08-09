import { FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import SignupForm from "../../components/forms/Signup";
import withAuthCard from "../../components/withAuthCard";
import { SignupValues } from "../../interface/auth";

const Signup = () => {
  const handleSignup = (
    values: SignupValues,
    { setSubmitting }: FormikHelpers<SignupValues>
  ) => {
    console.log(values);
  };
  return (
    <section className="flex flex-col gap-2 md:gap-4">
      <SignupForm onSubmit={handleSignup} />
      <p className="text-body2 text-reading-1 dark:text-reading-1-dark">
        Already have an account?{" "}
        <Link to="/signin" className="text-info">
          Sign In
        </Link>
      </p>
    </section>
  );
};

export default withAuthCard(
  Signup,
  "Sign up to EasyNotes",
  "Create your account"
);
