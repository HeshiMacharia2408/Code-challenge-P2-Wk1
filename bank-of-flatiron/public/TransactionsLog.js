import React, { useState } from 'react';

const TransactionsLog = () => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);
}

const handleSubmit = (e) => {
    e.preventDefault();

    if (!date.trim() || !description.trim() || !amount.trim()) {
      alert('Please fill out all fields');
      return;
    }
}

const newTransaction = {
      id: Date.now(),
      date,
      description,
      amount: parseFloat(amount),
};
setTransactions([...transactions, newTransaction]);

setDate('');
setDescription('');
setAmount('');

export default TransactionsLog;