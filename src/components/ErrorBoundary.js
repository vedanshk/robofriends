import React, { useState } from "react";

function ErrorBoundary({ error }) {
  const [hasError, setHasError] = useState(false);
  return (
    <div>
      {hasError && <h1>Something went Wrong</h1>}
    </div>
  );
}

export default ErrorBoundary;
