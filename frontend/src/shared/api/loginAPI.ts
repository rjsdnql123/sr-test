import { silcroadsoftAPI } from './apiBase';

const LoginApiHook = (() => {
  return {
    login: (email:string, password:string) => {
      return silcroadsoftAPI.post('/login', {
        email: email,
        password: password,
      });
    },
    register: (email:string, password:string) => {
      return silcroadsoftAPI.post('/register', {
        email: email,
        password: password,
      });
    },
  };
})();

export { LoginApiHook };
