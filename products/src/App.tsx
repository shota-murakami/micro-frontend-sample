import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from 'home/Header'
import Footer from 'home/Footer'

import './index.css'

const App = () => (
  <div className="container">
    <Header />
    <p>初めてのマイクロフロントエンド</p>
    <Footer />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)