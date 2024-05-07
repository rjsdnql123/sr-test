import { Button, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { LoginFormTitleWrapper, LoginFormWrapper } from "./LoginForm.style";
import { CommonInput, PasswordInput } from "../../Input";
import { useState } from "react";
import { useInternalRouter } from "../../../utuils/reactRouterHooks";
import { LoginApiHook } from "../../../shared/api/loginAPI";
import { IndexPageComponentProps } from "../IndexPageComponent.type";



function LoginForm({ onClickChangeSignStatus }: IndexPageComponentProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useInternalRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = await LoginApiHook.login(email, password);
      alert("로그인 성공");
      localStorage.setItem("token", token.data.token);
      router.push("/home");
    } catch (e) {
      console.log(e);
      alert("로그인 실패");
    }
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleClickCreateAccount = () => {
    onClickChangeSignStatus(false);
  };

  return (
    <LoginFormWrapper>
      <LoginFormTitleWrapper>
        <h1>Sign In</h1>
        <div>
          New user?
          <Typography
            color="primary"
            sx={{
              paddingLeft: "5px",
              cursor: "pointer"
            }}
            onClick={handleClickCreateAccount}
          >
            Create an account
          </Typography>
        </div>
      </LoginFormTitleWrapper>
      <FormControl component="form" onSubmit={handleSubmit}>
        <CommonInput
          label="Email address"
          id="email"
          type="text"
          onChange={handleChangeEmail}
          value={email}
        />
        <PasswordInput
          value={password}
          id="password"
          label="Password"
          onChange={handleChangePassword}
        />
        <Typography
          textAlign="right"
          sx={{
            textDecoration: "underline",
            cursor: "pointer"
          }}
        >
          Forgot password?
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          로그인
        </Button>
      </FormControl>
    </LoginFormWrapper>
  );
}

export default LoginForm;
