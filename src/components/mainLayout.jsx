import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"

const mainLayout = () => {
  return (
    < >
        <Header></Header>
        <Outlet />
        <Footer />
    </>
  )
}

export default mainLayout