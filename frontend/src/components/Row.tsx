import { RowProps } from "../types/types"

const Row = (props: RowProps): JSX.Element => {
    const { telefono, fecha, hora, duracion, etapa, pasos, intentos } = props.data

    return (
        <tr>
            <td>{telefono}</td>
            <td>{fecha}</td>
            <td>{hora}</td>
            <td>{duracion}</td>
            <td>{etapa}</td>
            <td>{pasos}</td>
            <td>{intentos}</td>
        </tr>
    )
}

export default Row