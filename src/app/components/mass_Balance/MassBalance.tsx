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

const Section = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.4rem; // Add spacing below the label
`;

const InputRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem; // Add spacing between input boxes
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  margin: 0 0.5rem;
  border: 1px solid #cfd8dc;
  border-radius: 4px;
  width: 120px;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  margin: 1rem 0;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #cfd8dc;
    padding: 0.8rem;
    text-align: center;
  }

  th {
    background-color: #f5f5f5;
  }
`;

const Result = styled.h2`
  margin-top: 1.5rem;
`;

export function MassAndBalanceCalculator() {
  const [emptyWeight, setEmptyWeight] = useState<{ weight: number; arm: string }>({ weight: 0, arm: '' });
  const [pilotPassengers, setPilotPassengers] = useState<{ weight: number; arm: string }>({ weight: 0, arm: '' });
  const [fuel, setFuel] = useState<{ liters: number; arm: string }>({ liters: 0, arm: '' });
  const [arms, setArms] = useState<number>(1);
  const [armDistances, setArmDistances] = useState<{ distance: string; weight: number }[]>(
    [{ distance: '', weight: 0 }]
  );
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

    setTotalWeight(totalWeight.toFixed(2));
    setCGPosition(newCGPosition.toFixed(2));
    setTotalMoment(totalMoment.toFixed(2));
  };

  const calculateFuelWeight = (fuelLiters: number): number => {
    return fuelLiters * 0.8;
  };

  // Properly update armDistances array when arms changes, preserving existing values
  const handleArmsChange = (newCount: number) => {
    setArms(newCount);
    setArmDistances((prev) => {
      const updated = [...prev];
      if (newCount > updated.length) {
        for (let i = updated.length; i < newCount; i++) {
          updated.push({ distance: '', weight: 0 });
        }
      } else if (newCount < updated.length) {
        updated.length = newCount;
      }
      return updated;
    });
  };

  return (
    <div>
      <NavBar />
      <Container>
        <h1>Calculadora de Mass & Balance</h1>

        <Section>
          <Label htmlFor="emptyWeight">Empty Aircraft Weight (kg):</Label>
          <InputRow>
            <StyledInput
              type="number"
              id="emptyWeight"
              placeholder="Peso"
              value={emptyWeight.weight}
              onChange={(e) => setEmptyWeight({ ...emptyWeight, weight: parseFloat(e.target.value) })}
            />
            <StyledInput
              type="number"
              id="emptyWeightArm"
              placeholder="Braço (m)"
              value={emptyWeight.arm}
              onChange={(e) => setEmptyWeight({ ...emptyWeight, arm: e.target.value })}
            />
          </InputRow>
        </Section>

        <Section>
          <Label htmlFor="pilotPassengers">Piloto e Passageiros (kg):</Label>
          <InputRow>
            <StyledInput
              type="number"
              id="pilotPassengers"
              placeholder="Peso"
              value={pilotPassengers.weight}
              onChange={(e) => setPilotPassengers({ ...pilotPassengers, weight: parseFloat(e.target.value) })}
            />
            <StyledInput
              type="number"
              id="pilotPassengersArm"
              placeholder="Braço (m)"
              value={pilotPassengers.arm}
              onChange={(e) => setPilotPassengers({ ...pilotPassengers, arm: e.target.value })}
            />
          </InputRow>
        </Section>

        <Section>
          <Label htmlFor="fuel">Combustível (litros):</Label>
          <InputRow>
            <StyledInput
              type="number"
              id="fuel"
              placeholder="Litros"
              value={fuel.liters}
              onChange={(e) => setFuel({ ...fuel, liters: parseFloat(e.target.value) })}
            />
            <StyledInput
              type="number"
              id="fuelArm"
              placeholder="Braço (m)"
              value={fuel.arm}
              onChange={(e) => setFuel({ ...fuel, arm: e.target.value })}
            />
          </InputRow>
        </Section>

        <hr style={{ width: '100%', margin: '2rem 0' }} />

        <Section>
          <Label htmlFor="arms">Número de "Arms":</Label>
          <select
            id="arms"
            value={arms}
            onChange={(e) => handleArmsChange(Number(e.target.value))}
            style={{
              marginBottom: '1rem',
              marginLeft: '0.5rem',
              padding: '0.4rem 0.7rem',
              borderRadius: '6px',
              border: '1px solid #cfd8dc',
              fontSize: '1rem',
            }}
          >
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </Section>

        <StyledTable>
          <thead>
            <tr>
              <th>#</th>
              <th>Distância (m)</th>
              <th>Peso (kg)</th>
            </tr>
          </thead>
          <tbody>
            {armDistances.map((arm, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <StyledInput
                    type="number"
                    className="arm-distance"
                    placeholder="Distância"
                    value={arm.distance}
                    onChange={(e) => {
                      const newDistances = [...armDistances];
                      newDistances[index].distance = e.target.value;
                      setArmDistances(newDistances);
                    }}
                  />
                </td>
                <td>
                  <StyledInput
                    type="number"
                    className="arm-weight"
                    placeholder="Peso"
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
        </StyledTable>

        <StyledButton onClick={calculate}>Calcular</StyledButton>

        <Result>
          Centro de Gravidade: <span id="cgPosition">{cgPosition}</span> m atrás do dantum
        </Result>
      </Container>
    </div>
  );
}

export default MassAndBalanceCalculator;
