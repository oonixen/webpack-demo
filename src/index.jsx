import {render} from 'react-dom'
import React from "react";
import styles from './style.scss'

const app = (
    <h1
        className={styles.color}
    >
        Test
    </h1>
)

render(
    app,
    document.getElementById('app')
)