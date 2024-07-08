import React, { useState } from 'react';
import './App.css';
import InputForm from './InputForm';
import Result from './Result';

function App() {
  const [odds, setOdds] = useState({ teamA: '', draw: '', teamB: '' });
  const [stake, setStake] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const { teamA, draw, teamB } = odds;
    const oddsArray = [
      { name: 'teamA', value: parseFloat(teamA) },
      { name: 'draw', value: parseFloat(draw) },
      { name: 'teamB', value: parseFloat(teamB) }
    ];

    // Filtra odds válidas e ordena em ordem crescente
    const validOdds = oddsArray.filter(odd => !isNaN(odd.value)).sort((a, b) => a.value - b.value);

    if (validOdds.length < 2) {
      alert('Please enter at least two valid odds.');
      return;
    }

    // Pega as duas menores odds
    const minOdds = validOdds.slice(0, 2);
    const total = minOdds[0].value + minOdds[1].value;
    const percentages = minOdds.map(odd => (odd.value / total) * 100);
    const recommendedBet = percentages.map(p => ((100 - p) / 100) * parseFloat(stake));

    // Monta o resultado com apostas recomendadas e retornos
    const newResult = {
      teamA: 0,
      draw: 0,
      teamB: 0,
      returns: {
        teamA: 0,
        draw: 0,
        teamB: 0,
        total: 0
      },
      netReturns: {
        teamA: 0,
        draw: 0,
        teamB: 0,
      }
    };

    minOdds.forEach((odd, index) => {
      newResult[odd.name] = recommendedBet[index];
      newResult.returns[odd.name] = recommendedBet[index] * odd.value;
    });

    newResult.returns.total = newResult.returns.teamA + newResult.returns.draw + newResult.returns.teamB;

    // Calcula os retornos líquidos subtraindo o investimento total
    const totalInvestment = recommendedBet.reduce((acc, bet) => acc + bet, 0);

    newResult.netReturns.teamA = newResult.returns.teamA - totalInvestment;
    newResult.netReturns.draw = -totalInvestment;
    newResult.netReturns.teamB = newResult.returns.teamB - totalInvestment;

    setResult(newResult);
  };

  return (
    <div className="App">
      <h1>Betting Calculator</h1>
      <InputForm odds={odds} setOdds={setOdds} stake={stake} setStake={setStake} />
      <button onClick={handleCalculate}>Calculate</button>
      {result && <Result result={result} />}
    </div>
  );
}

export default App;
