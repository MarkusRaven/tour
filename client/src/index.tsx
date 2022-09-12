import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { config } from './config'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
})

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
  }
  ul, li{
    list-style: none;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={config.theme}>
      <Global />
      <App />
    </ThemeProvider>
  </ApolloProvider>
)
