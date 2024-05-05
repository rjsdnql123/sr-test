import { css, Global } from "@emotion/react";

const style = css`
html{
    width: 100%;
    height: 100%;
    body {
        // display: flex;
        // justify-content: center;
        width: 100%;
        height: 100%;
        margin: 0;
        #root {
            // width: 500px;
            height: 100%;
        }
    }
}
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
