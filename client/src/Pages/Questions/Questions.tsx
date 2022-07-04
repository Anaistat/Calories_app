import React, { FC } from 'react'
import style from './Questions.module.sass'
import NameQuestion from './components/NameQuestion'

const Questions:FC = () => {
	return (
		<div className={style['slider-container']}>
			<NameQuestion/>
		</div>
	)
}

export default Questions