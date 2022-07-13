import { useState } from 'react';
import getJoke from '../api/jokeData';

function JokeGen() {
  const [joke, setJoke] = useState('');
  const handleClick = () => {
    getJoke().then((response) => {
      setJoke(`${response.setup}`);
    });
  };
  // const getPunchline = () => {
  //   getJoke().then((response) => {
  //     setJoke(`${response.delivery}`);
  //   });
  // };
  return (
    <>
      <h3>{joke}</h3>
      {joke ? <button type="button" onClick={() => handleClick}>Get Punchline</button> : <button type="button" onClick={() => handleClick()}>Get a Joke</button>}
    </>
  );
}
export default JokeGen;
