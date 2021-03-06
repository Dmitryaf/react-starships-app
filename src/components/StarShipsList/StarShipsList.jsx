import React, { useContext } from 'react';
import store from '../../store';
import styles from './StarShipsList.module.scss';
import StarShipItem from './StarShipItem/StarShipItem';

const StarShipsList = () => {
  const { starShips } = useContext(store);

  return (
    <>
      <h1 className="title">Список кораблей</h1>
      <div className={styles.list}>
        {starShips.map((starShip) => {
          return (
            <StarShipItem
              name={starShip.name}
              cost={starShip.cost_in_credits}
              passengers={starShip.passengers}
              length={starShip.length}
              maxSpeed={starShip.max_atmosphering_speed}
              id={starShip.id}
              selected={starShip.selected}
              key={starShip.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default StarShipsList;
