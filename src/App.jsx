import { useState } from 'react';
import './App.css';
import Logo from './Logo';
import Card from './Card';

function App() {
  const [isLogoClicked, setIsLogoClicked] = useState(false);

  const toggleCard = () => {
    setIsLogoClicked(!isLogoClicked);
  };

  return (
    <>
      <div>
        <h1>Hi</h1>
      </div>
      <Logo isClicked={isLogoClicked} setIsClicked={setIsLogoClicked} />
      <Card isLogoClicked={isLogoClicked} toggleCard={toggleCard} />
    </>
  );
}

export default App;
