import React, {useState} from "react"
import {CSSTransition} from "react-transition-group";
import styles from './style.scss'

export const BlockAnimationComponent = () => {

    const [isStart, setIsStart] = useState(false)
    const [array, setArray] = useState([1,2,3])

    return (
        <div
            className={styles.BlockAnimationComponent__view}
        >
            <div>
                {
                    array.map(count => (
                        <Block
                            key={count}
                            count={count}
                            isStart={isStart}
                            setArray={setArray}
                        />
                    ))
                }
            </div>
            <button
                onClick={() => setIsStart(!isStart)}
            >
                click
            </button>
        </div>
    )
}

const Block = ({count, isStart, setArray}) => (
    <CSSTransition
        in={isStart && count === 2}
        timeout={600}
        className={styles.BlockAnimationComponent__block}
        onEntered={() => setArray([1,3])}
    >
        <div>
            <CSSTransition
                in={isStart && count === 2}
                timeout={500}
                className={styles.BlockAnimationComponent__innerBlock}
            >
                <div/>
            </CSSTransition>
        </div>
    </CSSTransition>
)