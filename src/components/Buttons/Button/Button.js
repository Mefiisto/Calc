import React from 'react'
import classes from './Button.css'

const Button = props => {
	const cls = [
		classes.Button,
		props.height ? classes.height : null,
	]
	return (
		<button
			className={cls.join(' ')}
			onClick={props.onClick}
		>
		{props.label}
		</button>
	)
}



export default Button