import { Suspense } from 'react';
import Header from '../src/components/Header.jsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Loading from './components/Loading.jsx';
import routes from './routes';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="main__container">
          <Suspense fallback={<Loading />}>
            <Routes>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.element />} />
              ))}
            </Routes>
          </Suspense>
        </main>
      </Router>
    </>
  );
}

export default App;
