/* eslint-disable react/display-name */
import { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document<{
  styleTags: ReactElement[];
}> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.styleTags}

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Teko:300,400&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/jquery.viewport.min.js"></script>
        <script src="assets/js/jQuerySimpleCounter.min.js"></script>
        <script src="assets/js/jquery.magnific-popup.min.js"></script>
        <script src="assets/js/polyfill.min.js"></script>
        <script src="assets/js/isotope.pkgd.min.js"></script>
        {/* <script src="assets/js/animsition.min.js"></script> */}
        <script src="assets/js/bootstrap.bundle.min.js"></script>
        <script src="assets/js/rellax.min.js"></script>
        <script src="assets/js/swiper.min.js"></script>
        {/* <script src="assets/js/smoothscroll.js"></script> */}
        <script src="assets/js/svg4everybody.legacy.min.js"></script>
        <script src="assets/js/TweenMax.min.js"></script>
        <script src="assets/js/TimelineLite.min.js"></script>
        <script src="assets/js/typed.min.js"></script>
        <script src="assets/js/vivus.min.js"></script>
        <script src="assets/js/water.js"></script>

        <script src="assets/js/revolution/jquery.themepunch.tools.min.js"></script>
        <script src="assets/js/revolution/jquery.themepunch.revolution.min.js"></script>

        <script src="assets/js/revolution-addons/panorama/three.min.js"></script>
        <script src="assets/js/revolution-addons/panorama/revolution.addon.panorama.min.js"></script>

        <script src="assets/js/revolution-addons/slicey/revolution.addon.slicey.min.js"></script>

        <script src="assets/js/revolution/extensions/revolution.extension.actions.min.js"></script>
        <script src="assets/js/revolution/extensions/revolution.extension.carousel.min.js"></script>
        <script src="assets/js/revolution/extensions/revolution.extension.kenburn.min.js"></script>
        <script src="assets/js/revolution/extensions/revolution.extension.layeranimation.min.js"></script>
        <script src="assets/js/revolution/extensions/revolution.extension.migration.min.js"></script>
        <script src="assets/js/revolution/extensions/revolution.extension.navigation.min.js"></script>
        <script src="assets/js/revolution/extensions/revolution.extension.parallax.min.js"></script>
        <script src="assets/js/revolution/extensions/revolution.extension.slideanims.min.js"></script>
        <script src="assets/js/revolution/extensions/revolution.extension.video.min.js"></script>

        <script src="assets/js/theme.js"></script>
      </Html>
    );
  }
}
