import { createGlobalStyle } from "styled-components"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import '@fortawesome/fontawesome-svg-core/styles.css'

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 16px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
        margin: 0;
        padding: 0;
        font-weight: normal;
    }

    ol, ul {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }
`

export default function App({ Component, pageProps }) {
  	return (
		<>
            <Navbar/>
            <GlobalStyles />
            <Component {...pageProps} />
            <Footer/>
        </>
 	)
}
