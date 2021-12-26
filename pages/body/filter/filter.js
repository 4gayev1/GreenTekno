import classes from "./filter.module.css"

const filter = () => {
  return (
    <div>
      <div>
        <h3>Kateqoriyalar</h3>
        <hr />
        <ul className={`${classes.list}`}> 
          <li>
            <a>Smartfonlar</a>
          </li>
          <li>
            <a>Smart saatlar</a>
          </li>
          <li>
            <a>Aksesuarlar</a>
          </li>
          <li>
            <a>Planşetlər</a>
          </li>
          <li>
            <a>Qulaqlırlar</a>
          </li>
        </ul>
        <br />

        <h3>Qiymət aralığı</h3>
        <hr />
        40 <input type="range"/> 100
        <br/>
        <br/>
        <h3>Brendlər</h3>
        <hr/>
        <ul className={`${classes.list}`}>
          <li>
            <input type="checkbox" id="Apple" />
            <label htmlFor="Apple">Apple</label>
          </li>
          <li>
            <input type="checkbox" id="Apple" />
            <label htmlFor="Apple">Apple</label>
          </li>
          <li>
            <input type="checkbox" id="Apple" />
            <label htmlFor="Apple">Apple</label>
          </li>
          <li>
            <input type="checkbox" id="Apple" />
            <label htmlFor="Apple">Apple</label>
          </li>
          <li>
            <input type="checkbox" id="Apple" />
            <label htmlFor="Apple">Apple</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default filter;
