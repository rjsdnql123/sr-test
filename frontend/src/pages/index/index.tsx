import LoginForm from "../../components/LoginForm/LoginForm";
import LeftImage from "../../components/IndexPageComponent/LeftImage/LeftImage";
import { IndexPageContainer } from "./index.style";

function IndexPage() {
  return (
    <IndexPageContainer>
      <LeftImage />
      <LoginForm />
    </IndexPageContainer>
  );
}

export default IndexPage;
