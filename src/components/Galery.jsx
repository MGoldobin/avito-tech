import React, { useEffect, useState } from 'react'
import Card from './Card'
import Popup from './Popup'
import styles from './Galery.module.css'

function Galery() {
    const [list, setList] = useState([])
    const [popup, setPopup] = useState({is: false, id: undefined})

    useEffect(() => {
	    fetch('https://boiling-refuge-66454.herokuapp.com/images')
	    .then(res => res.json())
	    .then(res => {
            console.log(res)
            setList(res)
        })
        .catch(error => console.log(error))
    }, [])


    return (
        <div className={styles.Galery}>
            {
                list.map(item => (<Card key={item.id} id={item.id} url={item.url} setPopup={setPopup}/>))
            }

            { popup.is ? <Popup id={popup.id} setPopup={setPopup}/> : null}
        </div>
    )
}

export default Galery