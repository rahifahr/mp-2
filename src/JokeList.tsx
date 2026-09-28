import styled from "styled-components";

interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

interface JokeListProps {
    jokes: Joke[];
}

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  margin-bottom: 30px;
`;

const JokeCard = styled.div`
  background-color: white;
  border: 1px solid #dddddd;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

const JokeType = styled.p`
  font-weight: bold;
  margin-top: 0;
`;

const JokeText = styled.p`
  margin: 12px 0;
`;

function JokeList({ jokes }: JokeListProps) {
    return (
        <Container>
            <Title>Joke List</Title>

            {jokes.map((joke) => (
                <JokeCard key={joke.id}>
                    <JokeType>Type: {joke.type}</JokeType>
                    <JokeText>Setup: {joke.setup}</JokeText>
                    <JokeText>Punchline: {joke.punchline}</JokeText>
                </JokeCard>
            ))}
        </Container>
    );
}

export default JokeList;