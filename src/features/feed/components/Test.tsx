import React, { useState } from 'react';
import { useFeed } from '../api';

const products = [
  { id: 1, name: 'Product 1', category: 'Electronics' },
  { id: 2, name: 'Product 2', category: 'Clothing' },
  { id: 3, name: 'Product 3', category: 'Electronics' },
  { id: 4, name: 'Product 4', category: 'Books' },
  // Add more products as needed
];

function FeedFiltering() {
  const [filter, setFilter] = useState('');
  const { data = [] } = useFeed();

  const filteredProducts = posts.filter((product) => product.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="App">
      <h1>Product List</h1>
      <input type="text" placeholder="Filter by category" value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FeedFiltering;
