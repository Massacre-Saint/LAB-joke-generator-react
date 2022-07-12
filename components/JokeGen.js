import { useState } from 'react';
import getJoke from '../api/jokeData';

function JokeGen() {
  const [joke, setJoke] = useState('');
  const handleClick = () => {
    getJoke().then((object) => {
      setJoke(`${object.setup}`);
    });
  };
  return (
    <>
      {joke}
      {joke !== null ? <button type="button" onClick={handleClick}>Get a Joke</button> : <button type="button">Get punchline</button>}
    </>
  );
}
export default JokeGen;
