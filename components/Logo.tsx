import styled from "styled-components";
const Logo = styled.img.attrs({
  src: "/static/logo-2.svg"
})`
  height: 40px;
  position: relative;
  top: 5px;
  fill: var(--lightyellow);
  margin-right: auto;
  @media (max-width: 900px) {
    display: none;
  }
`;

export default Logo;
