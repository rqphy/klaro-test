import { ICard } from "./../../types/interface"

interface CardProps {
    data: ICard
}

export default function Card({ data }: CardProps) {
    return (
        <li className={`card card--${data.type}`}>
            <p className="card__title">{data.title}</p>
            <figure className="card__illustration">
                <img src={data.illustrationSrc} alt={data.title} />
            </figure>
            <button className="card__button">
                {data.buttonLabel}
                {data.type === "primary" && (
                    <figure>
                        <img src="/chevron-right.png" alt={data.buttonLabel} />
                    </figure>
                )}
            </button>
        </li>
    )
}
