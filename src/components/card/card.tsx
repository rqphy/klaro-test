import { iCard } from "./../../types/interface"

interface cardProps {
    data: iCard
}

export default function Card({ data }: cardProps) {
    return <li>{data.title}</li>
}
