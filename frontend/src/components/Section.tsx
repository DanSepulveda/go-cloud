import { SectionProps } from "../types/types"

const Section = (props: SectionProps): JSX.Element => {
    return (
        <section className={props.className}>
            {props.children}
        </section>
    )
}

export default Section