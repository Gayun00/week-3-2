import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      black: string;
      white: string;
      backgroundGray: string;
      borderGray: string;
    };
    shadow: string;
    font: {
      sizeL: string;
      sizeM: string;
      sizeS: string;
      weightM: string;
      weightS: string;
    };
    borderRadius: string;
  }
}
