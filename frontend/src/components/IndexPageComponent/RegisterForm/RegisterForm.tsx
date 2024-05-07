import { Button, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { CommonInput, PasswordInput } from "../../Input";
import { useState } from "react";
import { useInternalRouter } from "../../../utuils/reactRouterHooks";
import { LoginApiHook } from "../../../shared/api/loginAPI";
import { LoginFormWrapper, LoginFormTitleWrapper } from "../LoginForm/LoginForm.style";
import { IndexPageComponentProps } from "../IndexPageComponent.type";

function RegisterForm({onClickChangeSignStatus}:IndexPageComponentProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await LoginApiHook.register(email, password);
      alert("회원가입 성공! 로그인 해주시길 바랍니다.");
      onClickChangeSignStatus(true)
    } catch (e) {
      console.log(e);
      alert("회원가입 실패");
    }
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleClickCreateAccount = () => {
    onClickChangeSignStatus(true)
  };

  return (
    <LoginFormWrapper>
      <LoginFormTitleWrapper>
        <h1>Register</h1>
        <div>
          <Typography
            color="primary"
            sx={{
              paddingLeft: "5px",
              cursor: "pointer"
            }}
            onClick={handleClickCreateAccount}
          >
            Go SignIn
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          회원가입
        </Button>
      </FormControl>
    </LoginFormWrapper>
  );
}

export default RegisterForm;
