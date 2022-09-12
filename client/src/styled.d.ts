import 'styled-components';

interface ChildrenColors {
  main: string,
  contrastText: string,
  hover: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: ChildrenColors;
      primary: ChildrenColors
    }
  }
}