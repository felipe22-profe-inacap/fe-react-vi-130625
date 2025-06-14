import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PrincipalComponent from './pages/principal/PrincipalComponent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrincipalComponent />
  </StrictMode>,
)

import 'bootstrap/dist/css/bootstrap.min.css';
