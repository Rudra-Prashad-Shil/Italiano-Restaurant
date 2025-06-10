import { Outlet } from "react-router";
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App;