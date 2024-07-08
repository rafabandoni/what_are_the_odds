import React from 'react';

function Result({ result }) {
  return (
    <div>
      <h2>Recommended Bets</h2>
      <p>Team A: ${result.teamA.toFixed(2)}</p>
      <p>Draw: ${result.draw.toFixed(2)}</p>
      <p>Team B: ${result.teamB.toFixed(2)}</p>
      <h2>Potential Returns</h2>
      <p>Team A: ${result.returns.teamA.toFixed(2)}</p>
      <p>Draw: ${result.returns.draw.toFixed(2)}</p>
      <p>Team B: ${result.returns.teamB.toFixed(2)}</p>
      <h2>Net Returns</h2>
      <p>If Team A wins: ${result.netReturns.teamA.toFixed(2)}</p>
      <p>If Draw: ${result.netReturns.draw.toFixed(2)}</p>
      <p>If Team B wins: ${result.netReturns.teamB.toFixed(2)}</p>
    </div>
  );
}

export default Result;
