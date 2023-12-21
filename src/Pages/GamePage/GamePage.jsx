import { useState, useEffect } from 'react';
import { encodeSequenceService } from '../../utilities/simon-service';

export default function GamePage() {
  
  //* the four choices of the game
  const choices = ["green", "red", "yellow", "blue"];

  //* game sequence
  const [sequence, setSequence] = useState([]);

  //* game level
  const [level, setLevel] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(false);

  //* player sequence
  const [player, setPlayer] = useState([]);

  const handleRestart = async () => {
    const firstMove = choices[Math.floor(Math.random() * choices.length)];
    const moves = [firstMove];
    //* encode the array
    // try {
    //   const token = await encodeSequenceService(moves);
    //   setSequence(token);
    //   setPlayer([]);
    //   setLevel(1);
    //   setPlayerTurn(true);
    // } catch (err) {
    //   console.log(err);
    // }
    
    setSequence(moves);
    setPlayer([]);
    setLevel(1);
    setPlayerTurn(true);
  };

  const handleComputerMove = () => {
    const nextMove = choices[Math.floor(Math.random() * choices.length)];
    setSequence([...sequence, nextMove]);
    setLevel(level+1);
    setPlayerTurn(true);
  };

  const handlePlayerMove = (color) => {
    if (playerTurn === true) {
      setPlayer([...player, color]);

      let position = player.length;

      //* compare between color chosen by player and the color in the position in sequence array
      if (color === sequence[position]) {
        if ([...player, color].length === sequence.length) {
          setPlayerTurn(false);
          setPlayer([]);
          handleComputerMove();
        }
      } else {
        setLevel('game over');
        setPlayerTurn(false);
      }
    }

  };
  
  console.log('game sequence', sequence);
  console.log('player moves', player);
  
  return (
    <div>
      <h1>{level === 'game over' ? 'game over' : 'simon'}</h1>
      
      <div className="container">
        {
          choices.map(color => <Button nextMove={handlePlayerMove} key={color} color={color} />)
        }
      </div>

      <button disabled={level > 0} onClick={handleRestart}>{level === 'game over' ? 'restart' : level === 0 ? 'start' : `level ${level}`}</button>
    </div>
  );
}

function Button({ color, nextMove }) {

  const handleClick = () => {
    // console.log(color);
    nextMove(color);
  }

  return (
    <div className={`card ${color}`}
      onClick={handleClick}
    ></div>
  );
}