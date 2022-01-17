import { Call, Calls } from '../types/contex'
import Row from './Row'

const Table = ({ calls }: any): JSX.Element => {
    console.log(calls)
    const datos = [
        {
            telefono: 956813742,
            fecha: '05 Sep 2019',
            hora: '17:30pm',
            duracion: '25seg',
            etapa: 'No iniciada',
            pasos: 's2',
            intentos: 1,
        },
        {
            telefono: 956813742,
            fecha: '05 Sep 2019',
            hora: '17:30pm',
            duracion: '25seg',
            etapa: 'No iniciada',
            pasos: 's2',
            intentos: 1,
        },
        {
            telefono: 956813742,
            fecha: '05 Sep 2019',
            hora: '17:30pm',
            duracion: '25seg',
            etapa: 'No iniciada',
            pasos: 's2',
            intentos: 1,
        },
        {
            telefono: 956813742,
            fecha: '05 Sep 2019',
            hora: '17:30pm',
            duracion: '25seg',
            etapa: 'No iniciada',
            pasos: 's2',
            intentos: 1,
        },
        {
            telefono: 956813742,
            fecha: '05 Sep 2019',
            hora: '17:30pm',
            duracion: '25seg',
            etapa: 'No iniciada',
            pasos: 's2',
            intentos: 1,
        },
        {
            telefono: 956813742,
            fecha: '05 Sep 2019',
            hora: '17:30pm',
            duracion: '25seg',
            etapa: 'No iniciada',
            pasos: 's2',
            intentos: 1,
        },
        {
            telefono: 956813742,
            fecha: '05 Sep 2019',
            hora: '17:30pm',
            duracion: '25seg',
            etapa: 'No iniciada',
            pasos: 's2',
            intentos: 1,
        },
    ]

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