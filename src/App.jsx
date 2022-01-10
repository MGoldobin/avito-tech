import React from 'react'
import Galery from './components/Galery'
import styles from './App.module.css'
import './index.css'

function App() {
    return (
        <div className={styles.App}>
            <h1 className={styles.Title}>Test app</h1>
            <Galery />
            <p className={styles.Footer}>@2022</p>
        </div>
    )
}

export default App