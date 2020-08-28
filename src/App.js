import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import store from './store';
import StarShipsList from './components/StarShipsList/StarShipsList';
import CompareField from './components/CompareField/CompareField';

function App() {
  const [starShips, setStarShips] = React.useState([]);
  const [compareShips, setCmpareShips] = React.useState([]);

  useEffect(() => {
    axios
      .get('http://swapi.dev/api/films/2/')
      .then((response) => response.data.starships)
      .then((urlArr) => {
        const receivedShips = urlArr.map((item) => {
          const starShipsUrl = item;
          return axios.get(starShipsUrl);
        });
        Promise.all(receivedShips).then((result) => {
          setStarShips(
            result.map((item) => {
              return item.data;
            })
          );
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  starShips.forEach((item, index) => {
    item.id = index;
  });
  starShips.splice(3);

  return (
    <store.Provider value={{ starShips }}>
      <div className="App">
        <StarShipsList />
        <CompareField />
      </div>
    </store.Provider>
  );
}

export default App;
