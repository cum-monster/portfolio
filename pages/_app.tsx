import Footer from '../components/Footer'
import TransitionLayout from '../components/Transition/TransitionLayout'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className="text-white bg-neutral-900">
    <TransitionLayout>
   <Component {...pageProps} /> 
   <Footer />
   </TransitionLayout>
   
   </div>
}
