import "./styles/App.scss"
import Header from "./components/header/header"
import { useState, useEffect } from "react"
import Card from "./components/card/card"
import { ICard } from "./types/interface"

function App() {
    const [cards, setCards] = useState<ICard[]>([])
    const [isCarrouselScrolled, setIsCarrouselScrolled] =
        useState<boolean>(false)

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

    function handleCarrouselNavClick() {
        setIsCarrouselScrolled(!isCarrouselScrolled)
        console.log("clicked")
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
                <div className="secondary__carrousel">
                    <button
                        className={`secondary__nav secondary__nav--${
                            isCarrouselScrolled ? "left" : "right"
                        }`}
                        onClick={handleCarrouselNavClick}
                    >
                        <div className="secondary__icon">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.5 15L12.5 10L7.5 5"
                                    stroke="white"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </button>
                    <ul className={isCarrouselScrolled ? "scrolled" : ""}>
                        {cards.map(
                            (card) =>
                                card.type === "secondary" && (
                                    <Card data={card} key={card.id} />
                                )
                        )}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default App
