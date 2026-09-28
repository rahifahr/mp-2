import { useEffect, useState } from "react";
import JokeList from "./JokeList";

interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

function App() {
    const [jokes, setJokes] = useState<Joke[]>([]);

    useEffect(() => {
        fetch("https://official-joke-api.appspot.com/jokes/ten")
            .then((response) => response.json())
            .then((data) => setJokes(data));
    }, []);

    return <JokeList jokes={jokes} />;
}

export default App;
