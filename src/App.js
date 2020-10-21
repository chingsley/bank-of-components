import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import AuthPage from './pages/AuthPage';
import ComponentsPage from './pages/ComponentsPage';
import ImageCropper from './imagecropper/ImageCropper';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="app-main">
          <Route exact path="/" component={ImageCropper} />
          <Route path="/login" component={AuthPage} />
          <Route path="/components" component={ComponentsPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
