import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";

const useInternalRouter = () => {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      goBack() {
        navigate(-1);
      },
      push(path: string) {
        navigate(path);
      }
    };
  }, [navigate]);
};

const useGetLocation = () => {
  const location = useLocation();
  const { hash, pathname, search } = location;

  return useMemo(() => {
    return {
      hash,
      pathname,
      search
    };
  }, [hash, pathname, search]);
};

export { useInternalRouter, useGetLocation };
