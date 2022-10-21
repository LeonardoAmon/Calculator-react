import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render( <
    div >
    <
    Pai nome = "Leonardo"
    sobrenome = "Amon" >
    <
    Filho nome = "Pedro" / >
    <
    Filho nome = "Junior" / >
    <
    Filho nome = "Arthur" / >
    <
    /Pai> < /
    div > , document.getElementById('root'))