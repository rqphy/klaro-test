import "./styles/App.scss"
import Header from "./components/header/header"
import { useState, useEffect } from "react"
import Card from "./components/card/card"
import { ICard } from "./types/interface"

function App() {
    const [cards, setCards] = useState<ICard[]>([])

    async function fetchData() {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/homepage-cards`
            )
            console.log(`${import.meta.env.VITE_API_URL}/api/homepage-cards`)
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
                <h2>
                    Bonjour Clément, voici ce que vous pouvez faire aujourd'hui!
                </h2>
                <ul>
                    {cards.map(
                        (card) =>
                            card.type === "primary" && (
                                <Card data={card} key={card.id} />
                            )
                    )}
                </ul>
            </section>
            <section className="secondary">
                <h2>Les aides disponibles</h2>
                <ul>
                    {cards.map(
                        (card) =>
                            card.type === "secondary" && (
                                <Card data={card} key={card.id} />
                            )
                    )}
                </ul>
            </section>
        </>
    )
}

export default App
