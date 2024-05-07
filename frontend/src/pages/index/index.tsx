import LoginForm from "../../components/IndexPageComponent/LoginForm/LoginForm";
import LeftImage from "../../components/LeftImage/LeftImage";
import { IndexPageContainer } from "./index.style";
import { useState } from "react";
import RegisterForm from "../../components/IndexPageComponent/RegisterForm/RegisterForm";

function IndexPage() {
  const [signStatus, setSignStatus] = useState<boolean>(true);

  
  const onClickChangeSignStatus = (isSignIn:boolean) => {
    setSignStatus(isSignIn);
  
  }

  return (
    <IndexPageContainer>
      <LeftImage />
      {signStatus ? <LoginForm onClickChangeSignStatus={onClickChangeSignStatus} /> : <RegisterForm onClickChangeSignStatus={onClickChangeSignStatus}/>}
    </IndexPageContainer>
  );
}

export default IndexPage;
