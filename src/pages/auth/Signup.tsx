import { FormikHelpers } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import SignupForm from "../../components/forms/Signup";
import withAuthCard from "../../components/withAuthCard";
import { useSignupMutation } from "../../features/auth/authService";
import { SignupValues } from "../../interface/auth";
import { errorHandler } from "../../lib/utils";

const Signup = () => {
  const navigate = useNavigate()
  const [signup] = useSignupMutation();
  const handleSignup = async (
    values: SignupValues,
    { setSubmitting }: FormikHelpers<SignupValues>
  ) => {
    try {
      await signup(values).unwrap();
      toast.success(
        "User Signup successful!, please check your email for verification."
      );
      navigate('/signin')
    } catch (error) {
      errorHandler(error, "Signup failed. Please try again.");
    } finally {
      setSubmitting(false);
    }

  };
  return (
    <section className="flex flex-col gap-2 md:gap-4">
      <SignupForm onSubmit={handleSignup} />
      <p className="text-body2 text-reading-1 text-center">
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
