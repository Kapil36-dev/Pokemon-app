import React, { Suspense, lazy } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'
const Infopage = lazy(() => import('./component/infopage/Infopage'));
const Home = lazy(() => import('./component/home/home'))
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={
          <React.Suspense fallback={<h1 className='loading'>LOADING............</h1>}>
            <Home/>
            </React.Suspense>}>
          </Route>
          <Route exact path="/info" element={
            <React.Suspense fallback={<h1 className='loading'>LOADING............</h1>}>
              <Infopage/>
            </React.Suspense>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
