import React, { useState } from "react";

// TODO: add translating and proper styles, props, functionality to component
const ErrorBoundary = (props) => {
  const [hasError, setHasError] = useState();

  if (props.hasError) {
    setHasError("There was an Error");
    return <div>{hasError}</div>;
  }
  return props.children;
};

export default ErrorBoundary;
