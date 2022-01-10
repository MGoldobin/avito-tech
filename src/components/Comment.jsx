import React from 'react'
import styles from './Comment.module.css'
import convertTime from '../helper/convertTime.js'

const Comment = ({data}) => {
	return (
		<div className={styles.Comment}>
			<p className={styles.Date}>{convertTime(data.date)}</p>
			<p className={styles.Text}>{data.text}</p>
		</div>
	)
}

export default Comment