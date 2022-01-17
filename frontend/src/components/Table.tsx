import { Call } from '../types/contex'
import Row from './Row'

const Table = ({ calls }: any): JSX.Element => {
    return (
        <table>
            <thead>
                <tr>
                    <th>teléfono</th>
                    <th>fecha</th>
                    <th>hora</th>
                    <th>duración</th>
                    <th>ult. etapa</th>
                    <th>ult. pasos</th>
                    <th>intentos</th>
                </tr>
            </thead>
            <tbody>
                {calls.map((call: Call, index: number) => <Row call={call} key={index} />)}
            </tbody>
        </table>
    )
}

export default Table