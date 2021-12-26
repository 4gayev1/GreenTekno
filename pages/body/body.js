import Filter from "./filter/filter"
import Products from "./products/products"
import classes from "./main.module.css"
const main = () => {
    return (
        <div className={`${classes.container}`}>
            <Filter/>
            <Products/>
        </div>
    )
}

export default main
