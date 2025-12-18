
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const counters = document.querySelectorAll(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://i6adrhsujsrsc34z63vdz3qonu0dhilo.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counters.forEach(
        function(node) {
            node.innerHTML = `👀 Views: ${data}`;
        }
    );
}
updateCounter();