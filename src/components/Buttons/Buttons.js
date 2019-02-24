import React from 'react'
import classes from './Buttons.css'

const Button = props => {
	return (
		<div
			className={classes.Buttons}
		>
		{props.children}
		</div>
	)
}



export default Button