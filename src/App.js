import React from 'react';
import { LandingSection, Header, FeaturesComparison, Results } from 'sections';
import './App.scss';

function App() {
  return (
    <div className="grammarly-app-main-container">
        <Header />
        <LandingSection />
        <FeaturesComparison />
        <Results />
        
    </div>
  );
}

export default App;
