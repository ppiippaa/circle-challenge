import { useState } from "react";
import './App.css';
import Button from "./components/Button";
import Dot from "./components/Dot";

function App() {
    const [ coords, setCoords ] = useState([]);
    const [ removedCoords, setRemovedCoords ] = useState([]);


    const getCoords = (e) => {
        if (e.target.classList.contains('App')) {
            let coordX = e.clientX;
            let coordY = e.clientY;
            setCoords([...coords, {x: coordX, y: coordY}] )
        }

    }

    const handleUndo = () => {
        const copiedCoords = [...coords];
        const popped = copiedCoords.pop();
        setRemovedCoords([...removedCoords, popped]);
        setCoords(copiedCoords)
    }

    const handleRedo = () => {
        const copiedCoords = [...removedCoords];
        const popped = copiedCoords.pop();
        setCoords([...coords, popped]);
        setRemovedCoords(copiedCoords)
    }



  return (
    <div className="App" onClick={getCoords}>
      <Button command='undo' handleClick={handleUndo} disabled={coords.length === 0}/>
      <Button command='redo' handleClick={handleRedo} disabled={removedCoords.length === 0}/>
        {
            coords.map(coordPair => <Dot key={`${coordPair.x} + ${coordPair.y}`} coordX={coordPair.x} coordY={coordPair.y}/>)
        }
    </div>
  );
}

export default App;
