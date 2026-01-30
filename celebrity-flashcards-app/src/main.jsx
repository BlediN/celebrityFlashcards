import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode basename="/celebrity-flashcards-app/">
    <App />
  </StrictMode>,
)

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter basename="/celebrityFlashcards/">
//     <App />
//   </BrowserRouter>,
// )