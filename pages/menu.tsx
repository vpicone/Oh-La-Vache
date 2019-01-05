import Link from "next/link";
import Page from "../components/Page";

export default () => (
  <Page title="Menu | Oh La Vache!">
    <p>This is the Menu page!</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Page>
);
