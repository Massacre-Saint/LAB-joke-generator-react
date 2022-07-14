import { useState } from 'react';
import getJoke from '../api/jokeData';

function JokeGen() {
  const [joke, setJoke] = useState({});
  // const [punchline, setPunchline] = useState('');
  const [btnTxt, setBtnTxt] = useState('Get a Joke');
  const jokeApi = () => {
    if (btnTxt === 'Get a Joke' || btnTxt === 'Get another joke') {
      getJoke().then(setJoke);
      setBtnTxt('Get a punchline');
    } else if (btnTxt === 'Get a punchline') {
      setBtnTxt('Get another joke');
    }
  };
  return (
    <>
      <h2>{joke.setup}</h2>
      <h4>{btnTxt === 'Get another joke' ? joke.delivery : ''}</h4>
      <button type="button" onClick={jokeApi}>{btnTxt}</button>
    </>
  );
}
export default JokeGen;

// JokeGen.propTypes = {
//   title: PropTypes.string.isRequired,
// };
