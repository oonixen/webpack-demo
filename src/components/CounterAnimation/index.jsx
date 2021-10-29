import React, {useEffect, useState} from "react";
import styles from './style.scss'

const increment = 3721;

export const CounterAnimation = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        const obj = document.getElementById("value");
        const start = count === 0 ? 0 : count - increment

        animateValue(obj, start, count, 300);
    }, [count])

    return (
        <div
            className={styles.CounterAnimation__view}
        >
            <p
                id={"value"}
            >
            </p>
            <button
                onClick={() => setCount(count + increment)}
            >
                click me
            </button>
        </div>
    )
}

function animateValue(obj, start, end, duration) {

    let startTimestamp = null
    const step = (timestamp) => {

        if (!startTimestamp) startTimestamp = timestamp

        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        obj.innerHTML = Math.floor(progress * (end - start) + start)

        if (progress < 1) window.requestAnimationFrame(step)
    }

    window.requestAnimationFrame(step)
}