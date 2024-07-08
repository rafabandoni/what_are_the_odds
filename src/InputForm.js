import React from 'react';

function InputForm({ odds, setOdds, stake, setStake }) {
  return (
    <div>
      <label>
        Team A Odds:
        <input
          type="number"
          value={odds.teamA}
          onChange={(e) => setOdds({ ...odds, teamA: e.target.value })}
        />
      </label>
      <label>
        Draw Odds:
        <input
          type="number"
          value={odds.draw}
          onChange={(e) => setOdds({ ...odds, draw: e.target.value })}
        />
      </label>
      <label>
        Team B Odds:
        <input
          type="number"
          value={odds.teamB}
          onChange={(e) => setOdds({ ...odds, teamB: e.target.value })}
        />
      </label>
      <label>
        Stake:
        <input
          type="number"
          value={stake}
          onChange={(e) => setStake(e.target.value)}
        />
      </label>
    </div>
  );
}

export default InputForm;
