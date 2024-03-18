import { ICard } from "./../../types/interface"

interface CardProps {
    data: ICard
}

export default function Card({ data }: CardProps) {
    const handleCallBack = (_event: React.MouseEvent) => {
        // window.location.href = _event.dataset.url
        console.log("location changed")
    }

    return (
        <li
            className={`card card--${data.type}`}
            data-url="#"
            onClick={handleCallBack}
        >
            <p className="card__title">{data.title}</p>
            <figure className="card__illustration">
                <img src={data.illustrationSrc} alt={data.title} />
            </figure>
            <button
                className="card__button"
                data-url="#"
                onClick={handleCallBack}
            >
                {data.buttonLabel}
                {data.type === "primary" && (
                    <figure>
                        <img src="/chevron-cta.png" alt={data.buttonLabel} />
                    </figure>
                )}
            </button>
        </li>
    )
}
