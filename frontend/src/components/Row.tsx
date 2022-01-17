import { RowProps } from "../types/types"
import { getFecha, getTime, getDuration, getStep, getStatus } from '../lib/transformData'

const Row = (props: RowProps): JSX.Element => {
    const { phoneNumber, status, status_date, date, step } = props.call

    return (
        <tr>
            <td>{phoneNumber}</td>
            <td>{getFecha(date)}</td>
            <td>{getTime(date)}</td>
            <td>{getDuration(date, status_date)}</td>
            <td>{getStatus(status)}</td>
            <td>{getStep(step)}</td>
            <td>{Math.ceil(Math.random() * 10)}</td>
        </tr>
    )
}

export default Row