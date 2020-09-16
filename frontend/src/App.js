import React, { useState } from 'react';
import { Button, Cell, Grid, TextField, Paper, Heading, Text } from 'bold-ui';
import './App.css';

import api from './services/api';

function App() {
  const [hist, setHist] = useState([]);
  const [number, setNumber] = useState('');
  const [factorial, setFactorial] = useState('');

  const handleReset = () => {
    setNumber('');
    setFactorial('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.get(`/factorial?number=${number}`).then(({ data }) => {
      setFactorial(data.factorial);
      setHist((hist) => [
        ...hist,
        {
          number: number,
          factorial: data.factorial,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <header>
        <h1 class="logo">
          fatorial<span>!</span>
        </h1>
      </header>
      <form onSubmit={handleSubmit}>
        <Grid direction="row" gap={2} justifyContent="center" wrap>
          <Cell>
            <TextField
              label="Número"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </Cell>
          <Cell>
            <TextField
              label="Fatorial"
              name="empty"
              disabled={true}
              value={factorial}
            />
          </Cell>
        </Grid>
        <Grid direction="row" gap={2} justifyContent="center" wrap>
          <Cell>
            <Button skin="outline" onClick={handleReset}>
              Resetar
            </Button>
          </Cell>

          <Cell>
            <Button type="submit" kind="primary">
              Calcular
            </Button>
          </Cell>
        </Grid>
      </form>
      <h2>Histórico</h2>
      <div class="history-wrap">
        {hist
          ? hist.map(({ number, factorial }) => (
              <div class="history-box">
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
