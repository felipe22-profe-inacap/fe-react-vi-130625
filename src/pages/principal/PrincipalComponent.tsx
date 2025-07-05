import { useEffect, useState } from 'react'
import reactLogo from './../../assets/react.svg'
import viteLogo from '/vite.svg'
import './Principal.css'
import SaludoComponent from '../../common/SaludoComponent';
import { Button, Card, Container, Nav } from 'react-bootstrap';
import type { Pais } from '../../types/Pais';
import { PaisService } from '../../services/PaisService';

function PrincipalComponent() {
  const [variantState, setVariantState] = useState('dark')
  const [userName, setUserName] = useState('')
  const [capital, setCapital] = useState('')
  const [selectedKey, setSelectedKey] = useState('')
  const [region, setRegion] = useState('')
  const [paises, setPaises] = useState<Pais[]>([])
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

  const onChangeCountry = (e)=>{
    const nombrePais=e.target.value;
    const paisSeleccionado = paises.find((p:Pais)=>p.name == nombrePais)
    if(paisSeleccionado){
      setCapital(paisSeleccionado.capital)
      setRegion(paisSeleccionado.region);
    }else{
      setCapital('');
      setRegion('');
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const dataPaises:Pais[] = await PaisService.getPaises();
      setPaises(dataPaises);
    };
    fetchData();
  },[]);

  return (
    <>
      <Nav
        variant="pills"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item><Nav.Link href="/home" eventKey="home">Inicio</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="sobre-nosotros" href="/sobre-nosotros">Sobre Nosotros</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="servicios" href="/servicios">Servicios</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="contactenos" href="/contactenos">Contactenos</Nav.Link></Nav.Item>
      </Nav>
      <Container className='mb-10'>
        <h1>Mi Primera Aplicación</h1>
        <Card>
          <form action="" className='form mb-4'>
              <div className="form-group mb-4">
                <label htmlFor="idNombre">Ingrese el nombre</label>
                <input type="text" className="form-control mb-4" id="idNombre" value={userName} onChange={onChangeName} />
              </div>
              <div className="form-group  mb-4">
                <label htmlFor="idPais">Seleccione Pais</label>
                <select id="idPais" onChange={onChangeCountry} className='form-control select'>
                  <option value="">-- Elige el pais --</option>
                  {paises.map((pais:Pais)=>(
                      <option value={pais.name} key={pais.cca2}>
                        {pais.name}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="form-group  mb-4">
                <label htmlFor="idCapital">Capital</label>
                <input type="text" id="idCapital" disabled value={capital} className='form-control' />
              </div>
              <div className="form-group  mb-4">
                <label htmlFor="idContinente">Continente</label>
                <input type="text" id="idContinente" disabled value={region} className='form-control' />
              </div>
          </form>
          <SaludoComponent userName={userNameSaludar} variant={variantState}/>
          <div className="div inline-block">
            <Button variant="success" onClick={onSuccess}>Saludar con éxito</Button>
            &nbsp;&nbsp;
            <Button variant="danger" onClick={onDanger}>Saludar con Error</Button>
          </div>
        </Card>
      </Container>
    </>
  )
}

export default PrincipalComponent
