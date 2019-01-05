import Link from "next/link";
import styled from "styled-components";

const NavLink = styled.a<{ active: boolean }>`
  padding: 0 0.5ch;
  cursor: pointer;
  letter-spacing: 0.1ch;
  text-transform: uppercase;
  color: #647c99;
  /* #455569 - tint1 #556981 - tint2 3 #647c99 */
  border-bottom: ${({ active }) =>
    active ? "4px solid #E4695D" : "4px solid transparent"};
  text-decoration: none;
  font-variant: all-small-caps;
  font-weight: 500;
  transition: all 0.2s ease;
  @media (min-width: 900px) {
    &:hover {
      color: #e4695d;
    }
  }
`;

type Page = "/" | "/about" | "/menu" | "/catering";

const NavBar = styled.nav<{ home: boolean }>`
  position: absolute;
  padding: 1rem 25vw;
  font-size: 2rem;
  text-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);
  background: ${({ home }) => (home ? "transparent" : "#ffd67c")};
  top: ${({ home }) => (home ? "70vh" : "0")};
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  transition: all 0.7s ease;
  @media (max-width: 900px) {
    padding: 1rem 1rem;
    font-size: 1.6rem;
    top: ${({ home }) => (home ? "50vh" : "0")};
  }
`;

const Nav = ({ active }: { active: Page }) => (
  <NavBar home={active === "/"}>
    <Link prefetch href="/about" passHref>
      <NavLink active={active === "/about"}>About</NavLink>
    </Link>
    <Link prefetch href="/menu" passHref>
      <NavLink active={active === "/menu"}>Menu</NavLink>
    </Link>
    <Link prefetch href="/catering" passHref>
      <NavLink active={active === "/catering"}>Catering</NavLink>
    </Link>
  </NavBar>
);

export default Nav;
