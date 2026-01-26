import { Outlet } from "react-router"

const mainLayout = () => {
  return (
    < >
        <header>Header</header>
        <Outlet />
        <footer>Footer</footer>
    </>
  )
}

export default mainLayout