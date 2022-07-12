import getJoke from '../api/jokeData';

function JokeGen() {
  const handleClick = () => {
    getJoke().then((object) => {
      const joke = object.setup;
        <>
          <p>{joke}</p>
        </>;
    });
  };
  return (
    <>
      <button type="button" onClick={handleClick}>Get a Joke</button>
    </>
  );
}
export default JokeGen;
