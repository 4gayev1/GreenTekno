import Link from "next/link";
import classes from "./cart.module.css";

const cartItem = () => {
  let array = [1, 2, 4];

  return (
    <div>
      <div>
        <div className={`${classes.main}`}>
          <div>
            <h1>Səbət</h1>
            <div className={`${classes.container}`}>
              <img
                src="https://images.dog.ceo/breeds/dingo/n02115641_12922.jpg"
                className={`${classes.img}`}
              />
              Qulaqlıqlar
              <br />
              Apple Airpods Max
              <input className={`${classes.input}`} type="number" value="1"/>
              <span>$550.00</span>
            </div>
            <hr />
            <div className={`${classes.container}`}>
              <img
                src="https://images.dog.ceo/breeds/dingo/n02115641_12922.jpg"
                className={`${classes.img}`}
              />
              Qulaqlıqlar
              <br />
              Apple Airpods Max
              <input className={`${classes.input}`} type="number" value="1"/>
              <span>$550.00</span>
            </div>
            <hr />
            <div className={`${classes.container}`}>
              <img
                src="https://images.dog.ceo/breeds/dingo/n02115641_12922.jpg"
                className={`${classes.img}`}
              />
              Qulaqlıqlar
              <br />
              Apple Airpods Max
              <input className={`${classes.input}`} type="number" value="1" />
              <span>$550.00</span>
            </div>
            <hr />
          </div>

          <div className={`${classes.approve_box}`}>
              <br/>
            <input type="text" placeholder="Promokod" /> <br />
            <p> Endirim 0 Azn</p>
            <p>Çatdırılma 0 Azn</p>
            <h2>Toplam $1650</h2>
            <Link href="./payment/paymentCash">
              <button className={`${classes.btn}`}>Sifarişi rəsmiləşdir</button>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <center>
        <h1>Oxşar Məhsullar</h1>
      </center>
      <div className={`${classes.main}`}>
        <div className={`${classes.product_item}`} key={1}>
          <img
            key={1}
            src={"https://images.dog.ceo/breeds/dingo/n02115641_12922.jpg"}
            alt="dog"
            className={`${classes.product_img}`}
          />
          <h3>Apple</h3>
          <p>Price:$500</p>
        </div>
        <div className={`${classes.product_item}`} key={1}>
          <img
            key={1}
            src={"https://images.dog.ceo/breeds/dingo/n02115641_12922.jpg"}
            alt="dog"
            className={`${classes.product_img}`}
          />
          <h3>Apple</h3>
          <p>Price:$500</p>
        </div>
        <div className={`${classes.product_item}`} key={1}>
          <img
            key={1}
            src={"https://images.dog.ceo/breeds/dingo/n02115641_12922.jpg"}
            alt="dog"
            className={`${classes.product_img}`}
          />
          <h3>Apple</h3>
          <p>Price:$500</p>
        </div>
        <div className={`${classes.product_item}`} key={1}>
          <img
            key={1}
            src={"https://images.dog.ceo/breeds/dingo/n02115641_12922.jpg"}
            alt="dog"
            className={`${classes.product_img}`}
          />
          <h3>Apple</h3>
          <p>Price:$500</p>
        </div>
      </div>
    </div>
  );
};

export default cartItem;
