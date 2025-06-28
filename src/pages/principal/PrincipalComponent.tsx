import { useEffect, useState } from 'react'
import reactLogo from './../../assets/react.svg'
import viteLogo from '/vite.svg'
import './Principal.css'
import SaludoComponent from '../../common/SaludoComponent';
import { Button } from 'react-bootstrap';
import type { Pais } from '../../types/Pais';
import { PaisService } from '../../services/PaisService';

function PrincipalComponent() {
  const [variantState, setVariantState] = useState('dark')
  const [userName, setUserName] = useState('')
  const [paises, setPaises] = useState([])
  const [userNameSaludar, setUserNameSaludar] = useState('')
  const onSuccess = ()=>{
    setVariantState('success');
    setUserNameSaludar(userName)
  }
  const onDanger = ()=>{
    setVariantState('danger');
    setUserNameSaludar(userName)
  }

  const onChangeName = (e)=>{
    setUserName(e.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      const dataPaises = await PaisService.getPaises();
      console.log(dataPaises);
      setPaises(dataPaises);
    };
    fetchData();
  }, []);

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
        <form action="" className='form mb-4'>
            <div className="form-group">
              <label htmlFor="idNombre">Ingrese el nombre</label>
              <input type="text" className="form-control mb-4" id="idNombre" value={userName} onChange={onChangeName} />
            </div>
            <div className="form-group">
              <label htmlFor="idPais">Seleccione Pais</label>
              <select id="idPais" className='form-control select'>
                <option value="">-- Elige el pais --</option>
                {paises.map((pais:Pais)=>(
                    <option value={pais.name.common} key={pais.cca2}>
                      {pais.name.common}
                    </option>
                  )
                )}
              </select>
            </div>
        </form>
        <SaludoComponent userName={userNameSaludar} variant={variantState}/>
        <div className="div inline-block">
          <Button variant="success" onClick={onSuccess}>Saludar con éxito</Button>
          &nbsp;&nbsp;
          <Button variant="danger" onClick={onDanger}>Saludar con Error</Button>
        </div>
      </div>

    </>
  )
}

export default PrincipalComponent
