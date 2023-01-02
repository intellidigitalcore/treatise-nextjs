// import { Children } from "react"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../shared-components/Footer"
import Header from "../shared-components/Header"

const Layout = ({children }) =>{
  const location =  useRouter();
  const [pathName, setPathName] = useState("/");
  
  useEffect(()=>{
    setPathName(location.pathname)
  },[location.pathname])

  return (
    <>
        <Header></Header>
        <main>
            {children}
        </main>
        {
            (pathName !== "/signin" && pathName !=="/signup" && pathName !=="/subscribemember") &&
              <Footer></Footer>
        }
    </>
  )
}

export default Layout