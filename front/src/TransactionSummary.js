import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';
import TransactionPanel from './TransactionPanel.js';


const TransactionSummary = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const response = await fetch('http://localhost:5000/transactions');
    const data = await response.json();
    setTransactions(data.transactions);
  };

  useEffect(
    () => {
      fetchTransactions()
    },
    []
  );

  useEffect(
    () => {
      console.log(transactions)
    },
    [transactions]
  );

  return (
    <div>
      <Typography variant='h2'>TRANSACTION HISTORY</Typography>
      {transactions.map(tr =>
        <TransactionPanel data={tr} />
      )}
      <Button
        variant="contained"
        color="primary"
        startIcon={<RefreshIcon />}
        onClick={() => fetchTransactions()}
        >
        REFRESH
      </Button>
    </div>
  );
};

export default TransactionSummary;
