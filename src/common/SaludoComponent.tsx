import { Alert } from "react-bootstrap"
import type { SaludoProps } from "../types/SaludoProps"

function SaludoComponent(props:SaludoProps) {  
    return (
        <>
            <Alert key={props.variant} variant={props.variant}>
            Hola {props.userName}, mucho gusto
            </Alert>
        </>
    )
}
export default SaludoComponent