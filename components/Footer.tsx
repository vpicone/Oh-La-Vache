import styled from "styled-components";

const Footer = styled.footer`
  height: 15vh;
  background: var(--blue);
  color: var(--blue02);
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  padding: 1rem;
  font-size: 1rem;
  position: relative;
  bottom: 0;
  flex-direction: column;
  @media (max-width: 900px) {
    height: 20vh;
    margin-top: 2rem;
    bottom: 0;
  }
`;

const SignatureStyle = styled.small`
  a {
    text-decoration: underline;
    color: var(--blue02);
    text-decoration-skip-ink: auto;
  }
`;

const Signature = () => (
  <SignatureStyle>
    Design By&nbsp; <a href="https://vincepic.one"> VincePic.one</a>
  </SignatureStyle>
);

const SVG = styled.img`
  height: 1.5rem;
  margin: 0 1rem;
`;

export default () => (
  <Footer>
    <small>© 2019 Oh La Vache! rights reserved</small>
    <div style={{ display: "flex", alignItems: "center" }}>
      <a
        style={{ display: "flex", alignItems: "center" }}
        href="https://www.facebook.com/Oh-La-Vache-549226075545907/"
      >
        <SVG src="/static/facebook.svg" />
      </a>
      <a
        style={{ display: "flex", alignItems: "center" }}
        href="https://www.instagram.com/ohlavache.us/"
      >
        <SVG src="/static/instagram.svg" />
      </a>
    </div>
    <Signature />
  </Footer>
);
