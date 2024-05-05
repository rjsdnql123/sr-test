import { Button, InputLabel, OutlinedInput } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { LoginFormTitleWrapper, LoginFormWrapper } from "./LoginForm.style";
import { PasswordInput } from "../Input";
import { useState } from "react";
import { useInternalRouter } from "../../utuils/reactRouterHooks";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const router = useInternalRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    router.push('/home')
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  return (
    <LoginFormWrapper>
      <LoginFormTitleWrapper>
        <h1>Sign In</h1>
        <div>
          New user? <a>Create an account</a>
        </div>
      </LoginFormTitleWrapper>
      <FormControl component="form" onSubmit={handleSubmit}>
        <FormControl sx={{ mb: 1 }} variant="outlined" required>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <OutlinedInput
            id="email"
            type="text"
            label="Email"
            onChange={handleChangeEmail}
          />
        </FormControl>
        <PasswordInput value={password} onChange={handleChangePassword} />
        <div>Forgot password?</div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          로그인
        </Button>
      </FormControl>
    </LoginFormWrapper>
  );
}

export default LoginForm;
