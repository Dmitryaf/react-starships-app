import React, { useContext } from 'react';
import styles from './CompareField.module.scss';
import store from '../../store';
import CompareItem from './CompareItem/CompareItem';
import CompareResultField from './CompareResultField/CompareResultField';

const CompareField = () => {
  const { compareShips } = useContext(store);

  const isShips = compareShips[0] && compareShips[1] ? true : false;
  const firstItem = compareShips[0];
  const secondItem = compareShips[1];

  return (
    <>
      <h2 className="title">Сравнение кораблей</h2>
      <div className={styles.compareList}>
        {compareShips.map((compareShip) => {
          return (
            <CompareItem
              name={compareShip.name}
              cost={compareShip.cost_in_credits}
              passengers={compareShip.passengers}
              length={compareShip.length}
              maxSpeed={compareShip.max_atmosphering_speed}
              id={compareShip.id}
              key={compareShip.id}
            />
          );
        })}

        {isShips ? (
          <CompareResultField
            firstItem={
              <CompareItem
                name={firstItem.name}
                cost={firstItem.cost_in_credits}
                passengers={firstItem.passengers}
                length={firstItem.length}
                maxSpeed={firstItem.max_atmosphering_speed}
                id={firstItem.id}
                key={firstItem.id}
              />
            }
            secondItem={
              <CompareItem
                name={secondItem.name}
                cost={secondItem.cost_in_credits}
                passengers={secondItem.passengers}
                length={secondItem.length}
                maxSpeed={secondItem.max_atmosphering_speed}
                id={secondItem.id}
                key={secondItem.id}
              />
            }
          />
        ) : null}
      </div>
    </>
  );
};

export default CompareField;
