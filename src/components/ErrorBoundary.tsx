import React from "react";
import { Link } from "react-router-dom";
import { AlertOctagon, HomeIcon } from "lucide-react";

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
};

export default class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-base-100 rounded-lg shadow-xl p-8 text-center">
            <AlertOctagon className="w-16 h-16 mx-auto text-error mb-4" />
            <h1 className="text-4xl font-bold mb-4">Unexpected Error</h1>
            <p className="text-base-content/70 mb-8">
              An unexpected error occurred. Please try again later.
            </p>
            {this.state.error && (
              <div className="text-sm text-base-content/50 mb-4 p-2 bg-base-200 rounded">
                {this.state.error.message}
              </div>
            )}
            <Link
              to="/"
              className="inline-flex items-center bg-primary text-white rounded-lg px-4 py-2 gap-2 hover:bg-primary/80"
            >
              <HomeIcon className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
