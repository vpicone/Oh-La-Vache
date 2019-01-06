import * as React from "react";
import Head from "next/head";
import styled from "styled-components";

type Props = {
  title?: string;
};

const Page = styled.div`
  min-height: 100vh;
  padding: 80px 10vw 0 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 900px) {
    min-height: 100vh;
    padding: 80px 2.5rem;
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
