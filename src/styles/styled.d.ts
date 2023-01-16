import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      secondary: string,
      span: string;
      p: string;
      background: string;
      text: string;
      header: string;
      button: string;
      buttontext: string;
      table: string;
      tablecontent: string;
      tabletext: string;
      logo: string;
    }
  }
}

