import Navbar from "./navbar/navbar"
import SearchBar from "./searchBar/searchBar"
import Body from "./body/body"
import Footer from "./footer/footer"

const index = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default index

