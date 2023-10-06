import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export const AuthGuard = (props) => {
  const { children } = props;
  const router = useRouter();

  const ignore = useRef(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (ignore.current) {
      return;
    }

    ignore.current = true;

    if (!JSON.parse(window.localStorage.getItem("userSession"))) {
      router
        .replace({
          pathname: "/",
          query:
            router.asPath !== "/" ? { continueUrl: router.asPath } : undefined,
        })
        .catch(console.error);
    } else {
      setChecked(true);
    }
  }, [router.isReady]);

  if (!checked) {
    return null;
  }

  return children;
};
