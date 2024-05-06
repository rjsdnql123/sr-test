import { silcroadsoftAPI } from './apiBase';

const LoginApiHook = (() => {
  return {
    login: (email:string, password:string) => {
      return silcroadsoftAPI.post('/login', {
        email: email,
        password: password,
      });
    },
    // signup: () => {
    //   return silcroadsoftAPI.post('/signup');
    // },
  };
})();

export { LoginApiHook };
