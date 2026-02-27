import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// CSS is loaded via index.html or not used in JS

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
