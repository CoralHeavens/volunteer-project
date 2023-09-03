import React from 'react';
import Background from './components/Background';
import Header from './components/Header';
import HelpSection from './components/HelpSection';
import Footer from './components/Footer';

function App() {
  return (
    <main className='w-full max-w-[800px] mx-auto p-8 bg-amber-100 bg-opacity-60 rounded-xl'>
      <Background />

      <Header />

      <HelpSection />

      <Footer />
    </main>
  );
}

export default App;
