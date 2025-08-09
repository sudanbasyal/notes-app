import React from "react";

const withAuthCard = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  title: string,
  description?: string
) => {
  const AuthWrapperComponent: React.FC<P> = (props) => {
    return (
      
        <div className="w-full max-w-md p-6 sm:p-8 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col gap-1 mb-6">
            <h1 className="text-heading3 sm:text-heading2 text-center">{title}</h1>
            <p className="text-center text-body3 sm:text-body2 text-reading-1">{description}</p>
          </div>
          <WrappedComponent {...props} />
        </div>

    );
  };
  return AuthWrapperComponent;
};

export default withAuthCard;
