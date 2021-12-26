import Navbar from "./navbar/navbar"
import SearchBar from "./searchBar/searchBar"
import CartItem from "./cartItem/cartItem"
import Footer from "./footer/footer"


const cart = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <CartItem/>
      <Footer/>
    </div>
  )
}

export default cart
