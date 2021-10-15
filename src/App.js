import { useFlag, useUnleashContext } from '@unleash/proxy-client-react';

import logo from './logo.svg';
import './App.css';

function App() {
  const testToggleEnabled = useFlag('test-toggle')
  const updateContext = useUnleashContext();

  let testId = 'b3ce6c8a-4c8f-43d7-a10e-7a4c193cfb45'
  // Uncomment to test the behavior for artists without a feature enabled
  // testId = 'a3ce6c8a-4c8f-43d7-a10e-7a4c193cfb45'
  updateContext({
    userId: testId
  })

  return (
    <div className="App">
      <header className="App-header">
        {testToggleEnabled &&
          <img src={logo} className="App-logo" alt="logo" />
        }
        <p>
          Unsplash Feature Flag system PoC - this text is visible for everybody.
        </p>
        <p>
          Test: the React logo visibility should be controlled through FF + supplied ID.
        </p>
      </header>
    </div>
  );
}

export default App;
