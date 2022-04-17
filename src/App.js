import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import routes from './routes';

import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route?.path}
              element={
                <div>
                  <Suspense fallback={<div>Loading...</div>}>
                    {route && <route.element />}
                  </Suspense>
                </div>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
