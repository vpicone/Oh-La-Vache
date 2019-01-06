import Page from "../components/Page";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";

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
    margin: 0;
  }
  .list {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .list-item {
    margin: 1rem 0;
  }
`;

const Description = styled.em`
  margin: 0.5rem;
  text-align: justify;
  hyphens: auto;
`;

const Price = styled.strong`
  text-align: center;
  margin: 0.5rem;
`;

export default () => (
  <Page title="Menu">
    <MenuSection>
      <PageTitle>Oh La Viche! Sliders</PageTitle>
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
      <Description>
        Our Ice creams are a commitment to both quality and ethical sourcing. we
        feature a rotating selection of no less than 5 seasonal ice creams, with
        vegan options and a dairy free sorbet.
      </Description>
      <ul className="list">
        <li style={{ margin: "2rem 0" }}>
          <h3>Oh La Vache! Vanilla</h3>
          <Description>
            Signature blend of vanillas spanning three continents
          </Description>
        </li>
        <li style={{ margin: "2rem 0" }}>
          <h3>Oh La Vache! Chocolate</h3>
          <Description>Melange of Cemoi Dark and Milk chocolates</Description>
        </li>
      </ul>
      <ul
        className="list"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly"
        }}
      >
        <li className="list-item">
          <span>1 scoop</span>
          <strong>
            <br />3
          </strong>
        </li>
        <li className="list-item">
          2 scoops
          <strong>
            <br />6
          </strong>
        </li>
        <li className="list-item">
          3 scoops
          <strong>
            <br />
            8.5
          </strong>
        </li>
      </ul>
    </MenuSection>
    <MenuSection>
      <PageTitle>Drinks</PageTitle>
      <Description>
        <ul className="list">
          <li className="list-item">Mountain Valley Spring Water</li>
          <li className="list-item">Swamp Pops</li>
          <li className="list-item">File Root Beer</li>
          <li className="list-item">Ponchatoula Pop Rouge</li>
          <li className="list-item">Noble Cane Cola</li>
          <li className="list-item">Satsuma Fizz</li>
          <li className="list-item">Praline Cream Soda</li>
          <li className="list-item">Jean Lafitte Ginger Ale</li>
        </ul>
      </Description>
      <Price>2</Price>
    </MenuSection>
  </Page>
);
