/* eslint-disable */
import { HashRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

export function App() {
  return(

    <div>
      <Dashboard/>
    </div>
  ) 
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
