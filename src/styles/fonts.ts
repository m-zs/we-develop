import MontserratRegularWOFF from 'assets/fonts/montserrat/montserrat-v15-latin-ext_latin-regular.woff'
import MontserratRegularWOFF2 from 'assets/fonts/montserrat/montserrat-v15-latin-ext_latin-regular.woff2'
import Montserrat500WOFF from 'assets/fonts/montserrat/montserrat-v15-latin-ext_latin-500.woff'
import Montserrat500WOFF2 from 'assets/fonts/montserrat/montserrat-v15-latin-ext_latin-500.woff2'
import OpenSansRegularWOFF from 'assets/fonts/open-sans/open-sans-v18-latin-ext_latin-regular.woff'
import OpenSansRegularWOFF2 from 'assets/fonts/open-sans/open-sans-v18-latin-ext_latin-regular.woff2'
import OpenSans300WOFF from 'assets/fonts/open-sans/open-sans-v18-latin-ext_latin-300.woff'
import OpenSans300WOFF2 from 'assets/fonts/open-sans/open-sans-v18-latin-ext_latin-300.woff2'

export const fonts = `
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
      url(${MontserratRegularWOFF2}) format('woff2'),
      url(${MontserratRegularWOFF}) format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
      url(${Montserrat500WOFF2}) format('woff2'),
      url(${Montserrat500WOFF}) format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
      url(${OpenSansRegularWOFF2}) format('woff2'),
      url(${OpenSansRegularWOFF}) format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
      url(${OpenSans300WOFF2}) format('woff2'),
      url(${OpenSans300WOFF}) format('woff');
  }
`
