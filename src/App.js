import './App.css';
import ErrorBoundary from './components/base/error/ErrorBoundary';
import { AuthProvider } from './context/AuthContext';
import Router from './router/Router';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div className='App'>
          <Router/>
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
