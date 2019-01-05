import Link from "next/link";
import Page from "../components/Page";
export default () => (
  <Page title="Catering | Oh La Vache!">
    <p>This is the Catering page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Page>
);
