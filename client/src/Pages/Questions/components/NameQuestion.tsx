import React, { useState } from 'react'
import style from '../Questions.module.sass'
import Input from '../../../components/ui/Input'

const NameQuestion = () => {

	const [name, setName] = useState<string>('')

	return (
		<div className={style.slide}>
			<h1 className={style['slide__question']}>Hi! What is your name?</h1>
			<div className={style['slide__input-wrapper']}>
				<Input type='text' value={name} name='name-input' label='Name' onChange={e=>setName(e.target.value)}/>
			</div>
		</div>
	)
}

export default NameQuestion