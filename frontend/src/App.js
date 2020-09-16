import React, { useState } from 'react';
import { Button, Cell, Grid, TextField, Paper, Heading, Text } from 'bold-ui';
import './App.css';

import api from './services/api';

function App() {
  const [hist, setHist] = useState([]);
  const [error, setError] = useState('');
  const [number, setNumber] = useState('');
  const [factorial, setFactorial] = useState('');

  const handleReset = () => {
    setNumber('');
    setFactorial('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .get(`/factorial?number=${number}`)
      .then(({ data }) => {
        setFactorial(data.factorial);
        setHist((hist) => [
          ...hist,
          {
            number: number,
            factorial: data.factorial,
          },
        ]);
        setError('');
      })
      .catch((error) => setError('Insira um número natural.'));
  };

  return (
    <div className="App">
      <header>
        <h1 className="logo">
          fatorial<span>!</span>
        </h1>
      </header>

      <Grid direction="row" gap={2} justifyContent="center" wrap>
        <Cell sm={3}>
          <TextField
            label="Número"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
            error={error}
          />
        </Cell>
        <Cell sm={3}>
          <TextField
            label="Fatorial"
            name="empty"
            disabled={true}
            value={factorial}
          />
        </Cell>
      </Grid>
      <Grid direction="row" gap={2} justifyContent="center" wrap>
        <Cell sm={3}>
          <Button skin="outline" onClick={handleReset} block>
            Resetar
          </Button>
        </Cell>

        <Cell sm={3}>
          <Button kind="primary" onClick={handleSubmit} block>
            Calcular
          </Button>
        </Cell>
      </Grid>

      <h2>Histórico</h2>
      <div className="history-wrap">
        {hist
          ? hist.map(({ number, factorial }, idx) => (
              <div className="history-box" key={idx}>
                <Cell>
                  <Paper
                    elevation={10}
                    style={{
                      margin: '10px',
                      padding: '20px',
                    }}
                  >
                    {number}
                    <span>!</span> = {factorial}
                  </Paper>
                </Cell>
              </div>
            ))
          : ' '}
      </div>
    </div>
  );
}

export default App;
