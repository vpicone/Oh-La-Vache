import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()]
    };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta property="og:type" content="restaurant.restaurant" />
          <meta property="og:title" content="Oh La Vache!" />
          <meta property="og:url" content="https://ohlavache.now.sh" />
          <meta
            property="og:description"
            content="Oh La Vache! is an ice cream & slider food truck and caterer. New Orleans is our home, every flavor is an expression of the vibrancy of the communities and cultures our great city has to offer."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/vpp/image/upload/f_auto,q_auto/v1546712256/oh-la-vache/CoverImage.png"
          />
          <meta
            property="restaurant:menu"
            content="https://ohlavache.now.sh/menu"
          />
          <meta
            property="restaurant:contact_info:website"
            content="https://ohlavache.now.sh"
          />
          {/* <meta property="restaurant:contact_info:street_address" content="" /> */}
          <meta
            property="restaurant:contact_info:locality"
            content="New Orleans"
          />
          <meta property="restaurant:contact_info:region" content="LA" />
          {/* <meta property="restaurant:contact_info:postal_code" content="" /> */}
          <meta
            property="restaurant:contact_info:country_name"
            content="United States"
          />
          <meta
            property="restaurant:contact_info:email"
            content="info&#064;ohlavache.us"
          />
          <meta
            property="restaurant:contact_info:phone_number"
            content="504-239-1448"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
