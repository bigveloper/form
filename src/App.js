import { useEffect, useState } from 'react';
import './App.css';

// Component
function App() {
    // State
    const [isRadio, setIsRadio] = useState(false);
    // Event
    const checkBrand = (e) => setIsRadio(!isRadio);
    // Watch
    useEffect(() => {
        console.log(isRadio);
    }, [isRadio]);
    // JSX
    return (
        <div className="App">
            <h1> Radio </h1>
            <p>what is your favorite It company?</p>
            Apple
            <input type="radio" checked={isRadio} id="brand" name="brand" onChange={checkBrand} />
        </div>
    );
}

export default App;
