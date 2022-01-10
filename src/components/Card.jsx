import React from 'react'
import styles from './Card.module.css'

const Card = ({id,url, setPopup}) => {
	const handleClick = () => {
		setPopup({is: true, id: id})
	}

	return (
		<img className={styles.Card} src={url} alt={id} onClick={handleClick}/>
	)
}

export default Card