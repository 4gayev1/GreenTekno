import classes from "./navbar.module.css";
import Link from "next/link";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <div>
      <div className={`${classes.navbar}`}>
        <h3>
          <span className={`${classes.green}`}>Green</span>
          <span className={`${classes.blue}`}>Tekno</span>
        </h3>

        <div className={`${classes.navbar_text}`}>
          <Link href="/" >
            Ana Səhifə
          </Link>
          <Link href="/" >
            Məhsullar
          </Link>
          <Link href="/" >
            Endirimlər
          </Link>
        </div>

        <div>
          <button className={`${classes.btn}`}>
    
            <FontAwesomeIcon
              icon={faHeart}
              className={` ${classes.icons}`}
            />
          </button>

          <Link href="/cart"><button className={`${classes.btn}`}>
            
            <FontAwesomeIcon
              icon={faShoppingCart}
              className={` ${classes.icons}`}
            />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
