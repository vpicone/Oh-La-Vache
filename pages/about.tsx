import Page from "../components/Page";
import styled from "styled-components";
import Paragraph from "../components/Paragraph";

const Quote = styled.blockquote`
  margin: 0;
  margin: 4rem 0 2rem 0;
  font-size: 2.5rem;
  line-height: 1.15;
  font-style: italic;
  font-weight: 900;
  text-align: center;
  @media (max-width: 900px) {
    margin: 3rem 0 1rem 0;
    font-size: 2rem;
  }
`;

export default () => (
  <Page title="About">
    <Quote>
      "New Orleans is our home. Every flavor is an expression of the vibrancy of
      the communities, and cultures of our great city."
    </Quote>
    <Paragraph>
      Oh La Vache! ice cream is an American play on a French custard. We source
      our eggs, milk and cream from local Louisiana and Mississippi farms.
    </Paragraph>
    <Paragraph>
      Building our flavors from scratch, we utilize the best of what we can find
      be it local Ponchatoula strawberries or organic Indonesian coconut sugar.
    </Paragraph>
    <Paragraph>
      What began as two cooks sharing a saute station at a busy French bistro,
      turned into a friendship and then partnership in this business. Along the
      way, tireless standards of quality, shared love of a good time, and our
      mutual appreciation of our local communities has guided our vision.
    </Paragraph>
    <Paragraph>
      We invite you to enjoy this tribute to the city that has given us both so
      much.
    </Paragraph>
    <p style={{ textAlign: "center" }}>— Bradley Ward, Robert Tabone & team</p>
  </Page>
);
