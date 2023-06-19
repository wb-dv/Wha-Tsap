import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App/App.jsx';
import './normalize.css';
import './fonts.css';
import './index.css';

import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

