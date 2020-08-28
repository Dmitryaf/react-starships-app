import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import store from './store';
import StarShipsList from './components/StarShipsList/StarShipsList';
import CompareField from './components/CompareField/CompareField';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [starShips, setStarShips] = React.useState([]);
  const [compareShips, setCompareShips] = React.useState([]);

  const addStarShip = (id) => {
    if (
      compareShips.find((item) => item.id === id) ||
      compareShips.length === 2
    ) {
      return;
    } else {
      setCompareShips(
        compareShips.concat(starShips.filter((item) => item.id === id))
      );
      notifySuccessAdd();
    }
  };

  const removeCompareStarShip = (id) => {
    setCompareShips(compareShips.filter((item) => item.id !== id));
    notifySuccessDelete();
  };

  const notifySuccessAdd = () =>
    toast.success('Корабль добавлен в поле сравнения!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifySuccessDelete = () =>
    toast.success('Корабль удалён из поля сравнения!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

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
  starShips.splice(6);

  return (
    <store.Provider
      value={{ starShips, compareShips, addStarShip, removeCompareStarShip }}
    >
      <div className="App">
        <StarShipsList />
        <CompareField />
        <ToastContainer />
      </div>
    </store.Provider>
  );
}

export default App;
