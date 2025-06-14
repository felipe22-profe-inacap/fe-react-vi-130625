import { useState } from 'react'
import reactLogo from './../../assets/react.svg'
import viteLogo from '/vite.svg'
import './Principal.css'
import SaludoComponent from '../../common/SaludoComponent';
import { Button } from 'react-bootstrap';

function PrincipalComponent() {
  const [variantState, setVariantState] = useState('dark')
  const onSuccess = ()=>{
    setVariantState('success');
  }
  const onDanger = ()=>{
    setVariantState('danger');
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mi Primera Aplicación</h1>
      <div className="card">
        <SaludoComponent userName='Felipe' variant={variantState}/>
        <div className="div inline-block">
          <Button variant="success" onClick={onSuccess}>Success</Button>
          &nbsp;&nbsp;
          <Button variant="danger" onClick={onDanger}>Danger</Button>
        </div>
      </div>

    </>
  )
}

export default PrincipalComponent
