import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


// Render the main App component
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Matches the <div id="root"></div> in public/index.html
);
