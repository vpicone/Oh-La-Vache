import styled from "styled-components";

const Footer = styled.footer`
  height: 15vh;
  background: var(--darkblue);
  color: var(--lightblue);
  display: inline-flex;
  justify-content: space-evenly;
  padding: 1rem;
  align-items: center;
  width: 100vw;
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

const SVG = styled.img`
  height: 1.5rem;
  margin: 0 1rem;
`;

export default () => (
  <Footer>
    <div>© 2019 Oh La Vache! rights reserved</div>
    <div>
      <a href="https://www.facebook.com/Oh-La-Vache-549226075545907/">
        <SVG src="/static/facebook.svg" />
      </a>
      <a href="https://www.instagram.com/ohlavache.us/">
        <SVG src="/static/instagram.svg" />
      </a>
      {/* <SVG src="/static/twitter.svg" /> */}
    </div>
  </Footer>
);
