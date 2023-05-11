import sql from '../../img/sql.png'
import javascript from '../../img/javascript.png'
import css from '../../img/css.png'
import nodejs from '../../img/nodejs.png'
import reactjs from '../../img/reactjs.png'
import redux from '../../img/redux.png'
import plsql from '../../img/plsql.png'

const images = {
	sql,
	javascript,
	css,
	nodejs,
	reactjs,
	redux,
	plsql,
}

export const getImageByKey = (key) => images[key]
