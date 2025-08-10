import React from "react";

const withAuthCard = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  title: string,
  description?: string
) => {
  const AuthWrapperComponent: React.FC<P> = (props) => {
    return (
      <section className="fixed inset-0 flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md p-6 sm:p-8 bg-white rounded-lg shadow-lg m-4">
          <div className="flex flex-col gap-1 mb-6">
            <h1 className="text-heading3 sm:text-heading2 text-center font-semibold text-primary">
              {title}
            </h1>
            {description && (
              <p className="text-center text-body3 sm:text-body2 text-gray-600">
                {description}
              </p>
            )}
          </div>
          <WrappedComponent {...props} />
        </div>
      </section>
    );
  };
  return AuthWrapperComponent;
};

export default withAuthCard;
