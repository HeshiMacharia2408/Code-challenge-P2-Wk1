import React, { useState } from 'react';

const TransactionFilter = ({ transactions }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = transactions.filter((transaction) => {
      const dateMatch = transaction.date.toLowerCase().includes(term);
      const categoryMatch = transaction.category.toLowerCase().includes(term);
      const priceMatch = transaction.price.toString().includes(term);
      return dateMatch || categoryMatch || priceMatch;
    });

    setFilteredTransactions(filtered);
  };
}