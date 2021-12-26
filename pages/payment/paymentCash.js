import classes from "./payment.module.css";
import Link from "next/link";
import Navbar from "../navbar/navbar"
import SearchBar from "../searchBar/searchBar"
import Footer from "../footer/footer"

const payment = () => {
  return (
<div>
    <Navbar/>
    <SearchBar/>
<div className={`${classes.container}`}>
      <div>
        <h2>Səbət</h2>
        <Link href="./paymentCash">
          <button>Nağd</button>
        </Link>
        <Link href="./paymentLoan">
          <button>Kreditlə ödəniş</button>
        </Link>{" "}
        <br /> <br />
        <label htmlFor="text">Ad*</label>
        <input type="text" id="text" required/>
        <label htmlFor="text">Soyad*</label>
        <input type="text" id="text" required/> <br />
        <label htmlFor="text">Ata adı*</label>
        <input type="text" id="text" required/>
        <label htmlFor="text">Telefon nömrəsi*</label>
        <input type="text" id="text" required/> <br />
        <label htmlFor="text">Əlavə qeyd*</label>
        <input type="text" id="text" required/> <br />
        <h2>Çatdırılma Ünvanı</h2>
        <label htmlFor="text">Şəhər*</label>
        <input type="text" id="text" required/>
        <label htmlFor="text">Rayon*</label>
        <input type="text" id="text" required/> <br />
        <label htmlFor="text">Ünvan*</label>
        <input type="text" id="text" required/>
        <br />
        <br />
        <button className={`${classes.btn}`}>Sifarişi təsdiqlə</button>
      </div>

      <div className={`${classes.price_box}`}>
        <p>Cəmi:1650$</p>
        <p>Çatdırılma:0$</p>
        <h2>Yekun:1650$</h2>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default payment;
