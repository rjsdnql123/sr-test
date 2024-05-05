import {
  Button,
  InputLabel,
  OutlinedInput
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { LoginFormTitleWrapper, LoginFormWrapper } from "./LoginForm.style";
import { PasswordInput } from "../Input";

function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            label="Password"
          />
        </FormControl>
        <PasswordInput />
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
