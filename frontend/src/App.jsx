import Category from "./components/Category"
import DealsDay from "./components/DealsDay"
import Footer from "./components/Footer"
import HomeHeader from "./components/HomeHeader"
import Membership from "./components/Membership"
import Navbar from "./components/Navbar"
import Popular from "./components/Popular"
import PopularMemb from "./components/PopularMemb"
import Subscribe from "./components/Subscribe"
import Team from "./components/Team"
import Topbar from "./components/Topbar"
import Works from "./components/Works"

function App() {

  return (
    <>
      <Topbar />
      <Navbar />
       <HomeHeader />
      <Membership />
      <DealsDay />
      <Category />
      <PopularMemb />
      <Subscribe />
      <Works />
      <Team />
      <Popular />
      <Footer /> 
    </>
  )
}

export default App
