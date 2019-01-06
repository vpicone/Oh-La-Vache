import Link from "next/link";
import styled from "styled-components";
import Logo from "../components/Logo";
const NavLink = styled.a<{ active: boolean; home: boolean }>`
  padding: 0 0.5ch;
  margin: 0 1rem;
  cursor: pointer;
  letter-spacing: 0.1ch;
  text-transform: uppercase;
  color: ${({ home }) => {
    if (home) return "var(--black01)";
    return "var(--lightyellow)";
  }};
  border-bottom: ${({ active }) =>
    active ? "3px solid var(--lightyellow)" : "3px solid transparent"};
  text-decoration: none;
  font-variant: all-small-caps;
  font-weight: 500;
  text-shadow: ${({ home }) => (home ? "none" : "2.5px 2.5px 0px var(--red)")};
  transition: all 0.3s ease;
  position: relative;
  &:after {
    content: " ";
    position: absolute;
    z-index: -1;
    right: -3px;
    left: 3px;
    bottom: -6px;
    border: 2px solid ${({ active }) => (active ? "var(--red)" : "transparent")};
  }
  @media (min-width: 900px) {
    &:hover {
      color: var(--orange);
    }
  }
  @media (max-width: 900px) {
    margin: 0;
    padding: 0;
  }
`;

type Page = "/" | "/about" | "/menu" | "/catering";

const NavBar = styled.nav<{ home: boolean }>`
  position: fixed;
  font-size: 2rem;
  text-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);
  padding: 0 10vw;
  background: ${({ home }) => (home ? "transparent" : "var(--blue)")};
  top: ${({ home }) => (home ? "70vh" : "0")};
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: ${({ home }) => (home ? "center" : "flex-end")};
  transition: all 0.7s ease;
  line-height: 1.15;
  height: 80px;
  @media (max-width: 900px) {
    padding: 1rem 1rem;
    font-size: 1.5rem;
    top: ${({ home }) => (home ? "50vh" : "0")};
    justify-content: space-around;
  }
`;

const Nav = ({ active }: { active: Page }) => {
  const home = active === "/";
  return (
    <NavBar home={home}>
      {!home && (
        <Link prefetch href="/" passHref>
          <Logo />
        </Link>
      )}

      <Link prefetch href="/about" passHref>
        <NavLink home={home} active={active === "/about"}>
          About
        </NavLink>
      </Link>
      <Link prefetch href="/menu" passHref>
        <NavLink home={home} active={active === "/menu"}>
          Menu
        </NavLink>
      </Link>
      <Link prefetch href="/catering" passHref>
        <NavLink home={home} active={active === "/catering"}>
          Catering
        </NavLink>
      </Link>
    </NavBar>
  );
};

export default Nav;
