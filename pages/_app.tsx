import { ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";

export default function App({Component, pageProps,  router}) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence
                    mode="wait"
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0 })
                        }
                    }}
                >
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}