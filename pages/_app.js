import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import 'swiper/css';
import "swiper/css/navigation";


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
