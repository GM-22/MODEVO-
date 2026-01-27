import { Outlet } from "react-router"
import Header from "./Header"

const mainLayout = () => {
  return (
    < >
        <Header></Header>
        <Outlet />
        <footer>Footer</footer>
    </>
  )
}

export default mainLayout