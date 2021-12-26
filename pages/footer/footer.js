import classes from './footer.module.css'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const footer = () => {
    return (
        <div className={`${classes.background}`}>
            <div className={`${classes.container}`}>
            <h3><span className={`${classes.green} ` }>Green</span><span className={`${classes.blue}`}>Tekno</span></h3>
            <div className={`${classes.text}`}>
                Bizi izləyin:<br/>
                <a><FontAwesomeIcon icon={faInstagram} className={`${classes.text}`}/></a>
                <a><FontAwesomeIcon icon={faFacebook} className={`${classes.text}`}/></a>
            </div>
            <div className={`${classes.text}`}>
                Əlaqə:<br/>
                <a href='+994 50 123 45 67' className={`${classes.text}`}>+994 50 123 45 67</a>
                <br/>
                <a href='info@mail.com' className={`${classes.text}`}>info@mail.com</a>
            </div>
            <div className={`${classes.text}`}>
                Ünvan:<br/>
                <div className={`${classes.text}`}> Atatürk prospekti 58</div>
            </div>
            </div>
        </div>
    )
}

export default footer
