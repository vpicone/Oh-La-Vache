import Page from "../components/Page";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import Paragraph from "../components/Paragraph";

const MenuSection = styled.article`
  text-align: center;
  display: flex;
  padding: 2.5rem 0;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 4px solid var(--blue);
  &:last-of-type {
    border-bottom: none;
  }
  h3 {
    margin: 0.8rem 0;
    font-size: 1.5rem;
  }
  .list {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .list-item {
    margin: 2rem 0;
    font-size: 1.25rem;
  }
  .list-item--drink {
    margin: 1rem 0;
  }
`;

const Description = styled.em`
  margin: 0.5rem;
  font-size: 1.25rem;
  hyphens: auto;
  @media (max-width: 900px) {
    font-size: 1.25rem;
  }
`;

const Price = styled.strong`
  text-align: center;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  font-family: Munky;
  color: var(--black01);
`;

export default () => (
  <Page title="Menu">
    <MenuSection>
      <PageTitle>Oh La Vache! Sliders</PageTitle>
      <Description>
        Louisiana grass-fed beef, Mississippi Farmmhouse Cheddar Local Hydro Bib
        lettuce, Creole Tomatoes, Oh La Vache! sauce on a Dong Phuong Brioche
        Bun
      </Description>
      <Price>5</Price>
    </MenuSection>
    <MenuSection>
      <PageTitle>Sides</PageTitle>
      <ul className="list">
        <li className="list-item">
          <h3>Oh La Frites</h3>
          <Description>Blonde and crispy french fries</Description>
        </li>
        <li className="list-item">
          <h3>Oh La Rings</h3>
          <Description>Zesty onion string</Description>
        </li>
      </ul>
      <Price>3</Price>
    </MenuSection>
    <MenuSection>
      <PageTitle>Ice Cream and Sorbet</PageTitle>
      <Paragraph style={{ textAlign: "left" }}>
        Our Ice creams are a commitment to both quality and ethical sourcing. we
        feature a rotating selection of no less than 5 seasonal ice creams, with
        vegan options and a dairy free sorbet.
      </Paragraph>
      <ul className="list">
        <li style={{ margin: "2rem 0" }}>
          <h3>Oh La Vanilla!</h3>
          <Description>
            Signature blend of vanillas spanning three continents
          </Description>
        </li>
        <li style={{ margin: "2rem 0" }}>
          <h3>Oh La Chocolate!</h3>
          <Description>Melange of Cemoi Dark and Milk chocolates</Description>
        </li>
      </ul>
      <ul
        className="list"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between"
        }}
      >
        <li className="list-item">
          <span>1 scoop</span>
          <Price>
            <br />3
          </Price>
        </li>
        <li className="list-item">
          2 scoops
          <Price>
            <br />6
          </Price>
        </li>
        <li className="list-item">
          3 scoops
          <Price>
            <br />
            8.5
          </Price>
        </li>
      </ul>
    </MenuSection>
    <MenuSection>
      <PageTitle>Drinks</PageTitle>
      <Description>
        <ul className="list">
          <li className="list-item list-item--drink">
            Mountain Valley Spring Water
          </li>
          <li className="list-item list-item--drink">Swamp Pops</li>
          <li className="list-item list-item--drink">File Root Beer</li>
          <li className="list-item list-item--drink">Ponchatoula Pop Rouge</li>
          <li className="list-item list-item--drink">Noble Cane Cola</li>
          <li className="list-item list-item--drink">Satsuma Fizz</li>
          <li className="list-item list-item--drink">Praline Cream Soda</li>
          <li className="list-item list-item--drink">
            Jean Lafitte Ginger Ale
          </li>
        </ul>
      </Description>
      <Price>2</Price>
    </MenuSection>
  </Page>
);
