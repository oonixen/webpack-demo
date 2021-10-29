import {render} from 'react-dom'
import React from "react";
import {BlockAnimationComponent} from "./components/BlockAnimationComponent";
import 'style.scss'

const app = (
    <BlockAnimationComponent/>
)

render(
    app,
    document.getElementById('app')
)