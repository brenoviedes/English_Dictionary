import ReactDOM from 'react-dom/client';
import App from './App';
import PaletteStyles from './assets/fonts/palette';
import FontStyles from './assets/fonts/fonts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <PaletteStyles />
    <FontStyles />
    <App />
  </>
);