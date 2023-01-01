// import { Children } from "react"
import Footer from "../shared-components/Footer"
import Header from "../shared-components/Header"

const Layout = ({children }) =>{

  return (
    <>
        <Header></Header>
        <main>
            {children}
        </main>
        <Footer></Footer>
    </>
  )
}

export default Layout