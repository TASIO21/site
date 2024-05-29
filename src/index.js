// index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Импортируем createRoot из react-dom/client
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
