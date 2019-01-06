import Page from "../components/Page";
import PageTitle from "../components/PageTitle";
import Paragraph from "../components/Paragraph";

export default () => (
  <Page title="Catering">
    <PageTitle style={{ fontSize: "3rem", paddingTop: "2.5rem" }}>
      Let's build something.
    </PageTitle>
    <Paragraph style={{ maxWidth: "600px" }}>
      Oh La Vache! is available for catering events big and small, from office
      lunches to birthdays and weddings. We offer party set ups, as well as full
      onsite catering from the truck.
    </Paragraph>
    <Paragraph style={{ textAlign: "center" }}>
      For more information and catering estimates please email&nbsp;
      <a style={{ color: "var(--blue)" }} href="mailto:info@ohlavache.us">
        info@ohlavache.us
      </a>
    </Paragraph>
  </Page>
);
