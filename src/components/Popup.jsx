import React, { useState, useEffect } from 'react'
import Comment from './Comment'
import styles from './Popup.module.css'

const handleClick = async (imageId) => {
	const nameInput = document.getElementById('name')
	const textInput = document.getElementById('text')
	console.log(nameInput.value, textInput.value)

	fetch('https://boiling-refuge-66454.herokuapp.com/images/' + imageId + '/comments/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
					name: nameInput.value,
					comment: textInput.value,
			})
	})
	.catch(err => {return err})

	nameInput.value = ""
	textInput.value = ""
}

const Popup = ({id, setPopup}) => {
	const [data, setData] = useState({img: null, comments: []})

	useEffect(() => {
		fetch('https://boiling-refuge-66454.herokuapp.com/images/'+id)
		.then(res => res.json())
		.then(res => {
			setData({img: res.url, comments: res.comments})
		})
	}, [id]);

	return (
		<div className={styles.Popup_wrapper} onClick={() => setPopup({is:false, id: id})}>
			<div className={styles.Popup} onClick={e => e.stopPropagation()}>
				<button className={styles.CloseButton} onClick={e => {
					e.preventDefault()
					setPopup({is:false, id: id})
				}}></button>
				<img src={data.img} alt={data.img} className={styles.Image}/>
				<div className={styles.Comments}>
					{
						(data.comments).map(item => (<Comment key={item.id} data={item}/>))
					}
				</div>
				<form className={styles.Form}>
					<input className={styles.Input} id='name' type="text" placeholder='Ваше имя'/>
					<input className={styles.Input} id='text' type="text" placeholder='Ваш комментарий'/>
					<button className={styles.SendButton} onClick={(e) => {
							e.preventDefault() 
							handleClick(id)
						}}>Оставить комментарий</button>
				</form>
			</div>
		</div>
	)
}

export default Popup