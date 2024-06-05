import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './componentes/home'
import './app.css'
import { Nosotros } from './componentes/nosotros'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>

<Routes>
<Route path='/' element={<Nosotros/>}></Route>
</Routes>

</BrowserRouter>

  </React.StrictMode>,
)
