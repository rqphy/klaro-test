import "./styles/App.scss"
import Header from "./components/header/header"
import { useState, useEffect } from "react"
import Card from "./components/card/card"
import { iCard } from "./types/interface"

function App() {
    const [cards, setCards] = useState<iCard[]>([])

    async function fetchData() {
        try {
            const response = await fetch(
                "https://64f98ead4098a7f2fc149a34.mockapi.io/api/homepage-cards"
            )
            const data = await response.json()
            setCards(data)
        } catch (error) {
            console.error("Fetching data has failed", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Header />
            <section className="primary">
                <p>
                    Bonjour Clément, voici ce que vous pouvez faire aujourd'hui!
                </p>
                {cards.map(
                    (card) =>
                        card.type === "primary" && (
                            <Card data={card} key={card.id} />
                        )
                )}
            </section>
            <section className="secondary">
                <p>Les aides disponibles</p>
                {cards.map(
                    (card) =>
                        card.type === "secondary" && (
                            <Card data={card} key={card.id} />
                        )
                )}
            </section>
        </>
    )
}

export default App
