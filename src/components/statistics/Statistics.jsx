import css from './Statistics.module.css' 
export default function Statistics({ title = null, stats }) {
    return (
        <section className={css.statistics }>
            {title ?? <h2 className="title">{title}</h2>}

            <ul className={css.statList}>
                {stats.map(element => <li style={{backgroundColor:getRandomHexColor()}} key={element.id} className={css.item}>
                    <span className="label">{element.label}</span>
                    <span className="percentage">{element.percentage}%</span>
                </li>)}
  </ul>
</section>
    )
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}