import React, { useState } from 'react';
import axios from 'axios';

function InvoiceFormPage() {
  const [invoice, setInvoice] = useState({
    invoiceNumber: '',
    clientName: '',
    date: '',
    amount: '',
    status: 'Pending'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const handleSubmit = () => {
    axios.post('/api/invoices', invoice)
      .then(response => console.log('Invoice added:', response.data))
      .catch(error => console.error('Error adding invoice:', error));
  };

  return (
    <div>
      <h2>Invoice Form</h2>
      <input type="text" name="invoiceNumber" value={invoice.invoiceNumber} onChange={handleChange} placeholder="Invoice Number" />
      <input type="text" name="clientName" value={invoice.clientName} onChange={handleChange} placeholder="Client Name" />
      <input type="date" name="date" value={invoice.date} onChange={handleChange} />
      <input type="number" name="amount" value={invoice.amount} onChange={handleChange} placeholder="Amount" />
      <select name="status" value={invoice.status} onChange={handleChange}>
        <option value="Paid">Paid</option>
        <option value="Unpaid">Unpaid</option>
        <option value="Pending">Pending</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default InvoiceFormPage;
