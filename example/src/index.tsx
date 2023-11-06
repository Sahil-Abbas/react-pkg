import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from 'abcdhelloworld'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>React Basic Package Setup</h2>
      <Button />
    </div>
  </React.StrictMode>,
)
