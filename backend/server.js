const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let invoices = [];

app.post('/api/invoices', (req, res) => {
  const invoice = req.body;
  invoice.id = invoices.length + 1;
  invoices.push(invoice);
  res.status(201).send(invoice);
});

app.get('/api/invoices', (req, res) => {
  res.send(invoices);
});

app.put('/api/invoices/:id', (req, res) => {
  const { id } = req.params;
  const updatedInvoice = req.body;
  invoices = invoices.map(invoice => invoice.id === parseInt(id) ? updatedInvoice : invoice);
  res.send(updatedInvoice);
});

app.delete('/api/invoices/:id', (req, res) => {
  const { id } = req.params;
  invoices = invoices.filter(invoice => invoice.id !== parseInt(id));
  res.status(204).send();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
