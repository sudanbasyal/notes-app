import { AlertTriangle, HomeIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-base-100 rounded-lg shadow-xl p-8 text-center">
        <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-base-content/70 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Button
          text="Back to Home"
          icon={<HomeIcon className="w-4 h-4" />}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
