import React from "react";
import App, { Container } from "next/app";
import Nav from "../components/Nav";
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <Nav active={this.props.router.route} />
        <Component {...pageProps} />
        <style jsx global>{`
          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }
          html {
            background-image: url("https://res.cloudinary.com/vpp/image/upload/c_scale,f_auto,o_25,q_auto,w_800/v1546640879/oh-la-vache/marble.png");
            background-repeat: no-repeat;
            background-size: cover;
          }
          @font-face {
            font-family: "Colfax";
            font-display: "fallback";
            src: url("/static/fonts/Colfax-MediumItalic.woff2") format("woff2"),
              url("/static/fonts/Colfax-MediumItalic.woff") format("woff");
            font-weight: 500;
            font-style: italic;
          }

          @font-face {
            font-family: "Colfax";
            font-display: "fallback";
            src: url("/static/fonts/Colfax-Black.woff2") format("woff2"),
              url("/static/fonts/Colfax-Black.woff") format("woff");
            font-weight: 900;
            font-style: normal;
          }

          @font-face {
            font-family: "Colfax";
            font-display: "fallback";
            src: url("/static/fonts/Colfax-BoldItalic.woff2") format("woff2"),
              url("/static/fonts/Colfax-BoldItalic.woff") format("woff");
            font-weight: bold;
            font-style: italic;
          }

          @font-face {
            font-family: "Colfax";
            font-display: "fallback";
            src: url("/static/fonts/Colfax-RegularItalic.woff2") format("woff2"),
              url("/static/fonts/Colfax-RegularItalic.woff") format("woff");
            font-weight: normal;
            font-style: italic;
          }

          @font-face {
            font-family: "Colfax";
            font-display: "fallback";
            src: url("/static/fonts/Colfax-LightItalic.woff2") format("woff2"),
              url("/static/fonts/Colfax-LightItalic.woff") format("woff");
            font-weight: 300;
            font-style: italic;
          }

          @font-face {
            font-family: "Colfax";
            font-display: "fallback";
            src: url("/static/fonts/Colfax-Thin.woff2") format("woff2"),
              url("/static/fonts/Colfax-Thin.woff") format("woff");
            font-weight: 100;
            font-style: normal;
          }

          @font-face {
            font-family: "Colfax";
            font-display: "fallback";
            src: url("/static/fonts/Colfax-ThinItalic.woff2") format("woff2"),
              url("/static/fonts/Colfax-ThinItalic.woff") format("woff");
            font-weight: 100;
            font-style: italic;
          }

          @font-face {
            font-family: "Colfax";
            font-display: "fallback";
            src: url("/static/fonts/Colfax-Bold.woff2") format("woff2"),
              url("/static/fonts/Colfax-Bold.woff") format("woff");
            font-weight: bold;
            font-style: normal;
          }

          @font-face {
            font-family: "Colfax";
            font-display: "fallback";
            src: url("/static/fonts/Colfax-BlackItalic.woff2") format("woff2"),
              url("/static/fonts/Colfax-BlackItalic.woff") format("woff");
            font-weight: 900;
            font-style: italic;
          }

          @font-face {
            font-family: "Colfax";
            font-display: "fallback";
            src: url("/static/fonts/Colfax-Medium.woff2") format("woff2"),
              url("/static/fonts/Colfax-Medium.woff") format("woff");
            font-weight: 500;
            font-style: normal;
          }

          @font-face {
            font-family: "Colfax";
            font-display: "fallback";
            src: url("/static/fonts/Colfax-Regular.woff2") format("woff2"),
              url("/static/fonts/Colfax-Regular.woff") format("woff");
            font-weight: normal;
            font-style: normal;
          }

          @font-face {
            font-family: "Colfax";
            font-display: "fallback";
            src: url("/static/fonts/Colfax-Light.woff2") format("woff2"),
              url("/static/fonts/Colfax-Light.woff") format("woff");
            font-weight: 300;
            font-style: normal;
          }

          @font-face {
            font-family: "munky";
            src: url("/static/fonts/munky-bold.woff2") format("woff2"),
              url("/static/fonts/munky-bold.woff") format("woff");
            font-weight: bold;
            font-style: normal;
            font-display: fallback;
          }
          body {
            font-family: Colfax;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: Munky;
          }
        `}</style>
      </Container>
    );
  }
}
