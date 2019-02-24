import React from 'react'
import classes from './Display.css'

const Dispalay = props => {
	return (
		
		<input className={classes.Display} type="text" readOnly value={props.children} />
	)
}


export default Dispalay