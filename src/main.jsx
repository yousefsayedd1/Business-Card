import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header.jsx'
import Body from './components//body/Body.jsx'
import Footer from './components/Footer/Footer.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  </React.StrictMode>,
)
