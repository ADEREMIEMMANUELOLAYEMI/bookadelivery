import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DeliveryBooking from './delivery.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <DeliveryBooking/>
  </StrictMode>,
)
