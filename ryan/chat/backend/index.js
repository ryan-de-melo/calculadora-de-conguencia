const express = require('express');
const cors = require('cors');
const { parseEquations, solveCRT } = require('./tcrSolver');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/solve', (req, res) => {
  try {
    const { input } = req.body;
    const parsed = parseEquations(input);
    const solution = solveCRT(parsed);
    res.json(solution);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
