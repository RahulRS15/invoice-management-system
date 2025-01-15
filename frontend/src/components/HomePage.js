import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get('/api/invoices')
      .then(response => setInvoices(response.data))
      .catch(error => console.error('Error fetching invoices:', error));
  }, []);

  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice.id}>{invoice.clientName} - {invoice.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
