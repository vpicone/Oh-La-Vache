import * as React from "react";
import Head from "next/head";
import styled from "styled-components";
type Props = {
  title?: string;
};

const Page = styled.div`
  max-width: 700px;
  min-height: calc(85vh);
  margin: 0 auto;
  padding: 80px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  hyphens: auto;
  @media (max-width: 900px) {
    margin-top: 0;
    padding: 80px 2.5rem 0 2.5rem;
    min-height: 100vh;
  }
`;

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Oh La Vache!"
}) => (
  <Page>
    <Head>
      <title>{title} | Oh La Vache!</title>
    </Head>
    {children}
  </Page>
);

export default Layout;
