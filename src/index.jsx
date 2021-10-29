import {render} from 'react-dom'
import React from "react";
import {CounterAnimation} from "./components/CounterAnimation";
import 'style.scss'

const app = (
    <CounterAnimation/>
)

render(
    app,
    document.getElementById('app')
)