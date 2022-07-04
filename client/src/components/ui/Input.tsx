import React, { FC } from 'react'
import style from './Input.module.sass'

type InputTypes = 'text' | 'number'

interface InputProp {
    type: InputTypes
    value: string
    label?: string
	name: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput:FC<InputProp> = ({
	type= 'text',
	value,
	label,
	name,
	onChange }) => {
	return (
		<>
			<input type={type} className={style['form__field']} placeholder={label} name={name} onChange={onChange}/>
			<label htmlFor={name} className={style['form__label']}>{label}</label>
		</>

	)
}

export default TextInput