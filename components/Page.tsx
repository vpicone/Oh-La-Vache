import * as React from "react";
import Head from "next/head";
import styled from "styled-components";

type Props = {
  title?: string;
};

const Page = styled.div`
  height: 100vh;
  padding-top: 80px;
  @media (max-width: 900px) {
    height: 80vh;
  }
`;

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Oh La Vache!"
}) => (
  <Page>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </Page>
);

export default Layout;
