import './App.css';
import ProductPricePage from './components/pages/ProductPriceHistory';
import ErrorBoundary from './components/ErrorBoundary';

function App() {

  return (
    <div className="App">
      <ErrorBoundary>
        <ProductPricePage />
      </ErrorBoundary>
    </div>
  );
}

export default App;
