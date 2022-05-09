import './App.css';
import { useState } from 'react';
import PokeButton from './components/PokeButton'


function App() {
  const [pokeList, setPokeList] = useState([]);

  return (
    <div className="App">
      <PokeButton setPokeList={setPokeList} />
          <ul>
            {
              pokeList.map((pokemon, i) => {
                return(
                  <li key={i}>{pokemon.name}</li>
                );
              })
            }
          </ul>
    </div>
  );
}

export default App;
