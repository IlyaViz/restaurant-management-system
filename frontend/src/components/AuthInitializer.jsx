import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMeThunk, refreshTokenThunk } from "../features/auth/authThunk";

const AuthInitializer = ({ children }) => {
  const [ready, setReady] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      try {
        const result = await dispatch(refreshTokenThunk()).unwrap();

        await dispatch(fetchMeThunk(result.access)).unwrap();
      } catch {
        console.warn(
          "Failed to refresh token or fetch user info. User might not be logged in.",
        );
      } finally {
        setReady(true);
      }
    };

    init();
  }, [dispatch]);

  return <>{ready ? children : <div>Initializing authentication...</div>}</>;
};

export default AuthInitializer;