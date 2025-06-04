import React, { useState } from 'react';
import { NavItems } from '../navbar/navItems';
import { NavBar } from '../navbar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export function MassAndBalanceCalculator() {
  const [emptyWeight, setEmptyWeight] = useState<{ weight: number; arm: string }>({ weight: 0, arm: '' });
  const [pilotPassengers, setPilotPassengers] = useState<{ weight: number; arm: string }>({ weight: 0, arm: '' });
  const [fuel, setFuel] = useState<{ liters: number; arm: string }>({ liters: 0, arm: '' });
  const [arms, setArms] = useState<number>(1);
  const [armDistances, setArmDistances] = useState<{ distance: string; weight: number }[]>([
    { distance: '', weight: 0 },
  ]);
  const [totalWeight, setTotalWeight] = useState<string>('0');
  const [cgPosition, setCGPosition] = useState<string>('0');
  const [totalMoment, setTotalMoment] = useState<string>('0');

  const calculate = () => {
    const emptyWeightWithArm = emptyWeight.weight * parseFloat(emptyWeight.arm);
    const pilotPassengersWithArm = pilotPassengers.weight * parseFloat(pilotPassengers.arm);
    const fuelWeight = calculateFuelWeight(fuel.liters) * parseFloat(fuel.arm);
    const totalWeight = emptyWeight.weight + pilotPassengers.weight + calculateFuelWeight(fuel.liters);
    const totalMoment = emptyWeightWithArm + pilotPassengersWithArm + fuelWeight;

    const newCGPosition = totalMoment / totalWeight;

    // Update state variables
    setTotalWeight(totalWeight.toFixed(2));
    setCGPosition(newCGPosition.toFixed(2));
    setTotalMoment(totalMoment.toFixed(2));
  };

  const calculateFuelWeight = (fuelLiters: number): number => {
    // Assuming a fuel density of 0.8 kg/liter
    return fuelLiters * 0.8;
  };

  const getAverageArmDistance = (): number => {
    const totalWeight = armDistances.reduce((total, arm) => total + arm.weight, 0);
    const weightedTotalDistance = armDistances.reduce(
      (total, arm) => total + parseFloat(arm.distance) * arm.weight,
      0
    );

    return totalWeight > 0 ? weightedTotalDistance / totalWeight : 0;
  };

  const generateArmFields = () => {
    setArmDistances(prevDistances => {
      const armsCount = parseInt(arms.toString());

      // Generate new arm distances and weights
      const newArmDistances: { distance: string; weight: number }[] = Array.from({ length: armsCount }, () => ({
        distance: '',
        weight: 0,
      }));
      return newArmDistances;
    });
  };

  return (
    <div>
      <NavBar />
      <Container>
        <h1>Calculadora de Mass & Balance</h1>

        <label htmlFor="emptyWeight">Empty Aircraft Weight (kg):</label>
        <input
          type="number"
          id="emptyWeight"
          placeholder="Enter weight"
          value={emptyWeight.weight}
          onChange={(e) => setEmptyWeight({ ...emptyWeight, weight: parseFloat(e.target.value) })}
        />
        <input
          type="number"
          id="emptyWeightArm"
          placeholder="Enter arm distance"
          value={emptyWeight.arm}
          onChange={(e) => setEmptyWeight({ ...emptyWeight, arm: e.target.value })}
        />

        <label htmlFor="pilotPassengers">Piloto e Passageiros(kg):</label>
        <input
          type="number"
          id="pilotPassengers"
          placeholder="Enter weight"
          value={pilotPassengers.weight}
          onChange={(e) => setPilotPassengers({ ...pilotPassengers, weight: parseFloat(e.target.value) })}
        />
        <input
          type="number"
          id="pilotPassengersArm"
          placeholder="Enter arm distance"
          value={pilotPassengers.arm}
          onChange={(e) => setPilotPassengers({ ...pilotPassengers, arm: e.target.value })}
        />

        <label htmlFor="fuel">Combustível (litros):</label>
        <input
          type="number"
          id="fuel"
          placeholder="Enter fuel"
          value={fuel.liters}
          onChange={(e) => setFuel({ ...fuel, liters: parseFloat(e.target.value) })}
        />
        <input
          type="number"
          id="fuelArm"
          placeholder="Enter arm distance"
          value={fuel.arm}
          onChange={(e) => setFuel({ ...fuel, arm: e.target.value })}
        />

        <hr />

        <label htmlFor="arms">Número de "Arms":</label>
        <select
          id="arms"
          value={arms}
          onChange={(e) => {
            setArms(parseInt(e.target.value));
            generateArmFields();
          }}
        >
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>

        <table id="armsTable">
          <tbody>
            {armDistances.map((arm, index) => (
              <tr key={index}>
                <td>{`Arm ${index + 1} distance (m):`}</td>
                <td>
                  <input
                    type="number"
                    className="arm-distance"
                    placeholder="Enter distance"
                    value={arm.distance}
                    onChange={(e) => {
                      const newDistances = [...armDistances];
                      newDistances[index].distance = e.target.value;
                      setArmDistances(newDistances);
                    }}
                  />
                </td>
                <td>{`Arm ${index + 1} weight (kg):`}</td>
                <td>
                  <input
                    type="number"
                    className="arm-weight"
                    placeholder="Enter weight"
                    value={arm.weight}
                    onChange={(e) => {
                      const newDistances = [...armDistances];
                      newDistances[index].weight = parseFloat(e.target.value);
                      setArmDistances(newDistances);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={calculate}>Calculate</button>

        <h2>
          Centro de Gravidade: <span id="cgPosition">{cgPosition}</span> m atrás do dantum
        </h2>
      </Container>
    </div>
  );
}

export default MassAndBalanceCalculator;
