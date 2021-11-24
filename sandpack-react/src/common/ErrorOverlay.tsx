import { useClasser } from "@code-hike/classer";
import * as React from "react";

import { useErrorMessage } from "../hooks/useErrorMessage";

export const ErrorOverlay: React.FC = () => {
  const errorMessage = useErrorMessage();
  const c = useClasser("spf");

  if (!errorMessage) {
    return;
  }
  return (
    <div className={c("overlay", "error")} translate="no">
      <div className={c("error-message")}>{errorMessage}</div>
    </div>
  );
};
