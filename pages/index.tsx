import styled from "styled-components";
import Page from "../components/Page";

const CenteredContainer = styled.main`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 45vw;
  margin-bottom: 4rem;
  max-width: 600px;
  min-width: 300px;
  @media (max-width: 900px) {
    margin-bottom: 0;
    margin-top: 2rem;
  }
`;

export default () => (
  <Page title="Home">
    <CenteredContainer>
      <Logo
        alt="Oh La Vache! Cow Logo with with ice cream & sliders subtext"
        src="https://res.cloudinary.com/vpp/image/upload/c_scale,f_auto,q_auto,w_600/v1546640458/oh-la-vache/CowLogo.png"
      />
    </CenteredContainer>
  </Page>
);
