import Page from "../components/Page";
import PageTitle from "../components/PageTitle";
import Paragraph from "../components/Paragraph";

export default () => (
  <Page title="Catering">
    <PageTitle style={{ marginTop: "2rem", fontSize: "3rem" }}>
      Let's build something.
    </PageTitle>
    <Paragraph style={{ textAlign: "center" }}>
      Oh La Vache! is available for catering events big and small, from office
      lunches to birthdays and weddings. We offer party set ups, as well as full
      onsite catering from the truck.
    </Paragraph>
    <Paragraph style={{ textAlign: "center" }}>
      For more information and catering estimates please email
      <a style={{ color: "var(--blue)" }} href="mailto:info@ohlavache.us">
        {" "}
        info@ohlavache.us
      </a>
    </Paragraph>
  </Page>
);
