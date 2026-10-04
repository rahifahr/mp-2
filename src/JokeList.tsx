import { useState } from "react";
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

const Page = styled.div`
min-height: 100vh;
background: #17151c;
padding: 60px 20px;
font-family: Georgia, "Times New Roman", serif;
`;

const Container = styled.div`
max-width: 850px;
margin: 0 auto;
`;

const Header = styled.div`
text-align: center;
margin-bottom: 45px;
`;

const Title = styled.h1`
color: #f3e8ff;
font-size: 42px;
font-weight: normal;
letter-spacing: 1px;
margin: 0 0 10px;
`;

const Subtitle = styled.p`
color: #a99fb5;
font-size: 17px;
font-style: italic;
margin: 0;
`;

const JokeCard = styled.div`
background: #211e28;
border: 1px solid #393241;
border-radius: 14px;
padding: 28px 30px;
margin-bottom: 22px;
box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
transition: transform 0.2s ease, border-color 0.2s ease;

&:hover {
    transform: translateY(-3px);
    border-color: #77658a;
}
`;

const Type = styled.p`
color: #bda7d4;
font-size: 13px;
font-weight: bold;
letter-spacing: 2px;
text-transform: uppercase;
margin: 0 0 18px;
`;

const Setup = styled.p`
color: #eee8f2;
font-size: 19px;
line-height: 1.6;
margin: 0 0 22px;
`;

const RevealButton = styled.button`
background: #77658a;
color: #f8f3fb;
border: none;
border-radius: 8px;
padding: 10px 18px;
font-family: Georgia, "Times New Roman", serif;
font-size: 15px;
cursor: pointer;
transition: background-color 0.2s ease, transform 0.2s ease;

&:hover {
    background: #8d78a2;
    transform: translateY(-1px);
}
`;

const PunchlineBox = styled.div`
background: #2a2532;
border-left: 3px solid #bda7d4;
border-radius: 6px;
margin-top: 20px;
padding: 15px 18px;
`;

const Punchline = styled.p`
color: #eee8f2;
font-size: 18px;
line-height: 1.6;
margin: 0;
`;

function JokeList({ jokes }: JokeListProps) {
  const [revealedJokes, setRevealedJokes] = useState<number[]>([]);

  const togglePunchline = (id: number) => {
    setRevealedJokes((current) =>
      current.includes(id)
        ? current.filter((jokeId) => jokeId !== id)
        : [...current, id]
    );
  };

  return (
    <Page>
      <Container>
        <Header>
          <Title>Little Laughs</Title>
          <Subtitle>A collection of jokes, one at a time.</Subtitle>
        </Header>

        {jokes.map((joke) => {
          const isRevealed = revealedJokes.includes(joke.id);

          return (
            <JokeCard key={joke.id}>
              <Type>{joke.type}</Type>

              <Setup>{joke.setup}</Setup>

              <RevealButton onClick={() => togglePunchline(joke.id)}>
                {isRevealed ? "Hide" : "Reveal"}
              </RevealButton>

              {isRevealed && (
                <PunchlineBox>
                  <Punchline>{joke.punchline}</Punchline>
                </PunchlineBox>
              )}
            </JokeCard>
          );
        })}
      </Container>
    </Page>
  );
}

export default JokeList;