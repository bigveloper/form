import { useState, useEffect } from 'react';
import './App.css';

// Component
function App() {
    // State
    const [isRadio, setIsRadio] = useState(false);

    // Event
    const clickOnRadio = () => {
        console.log(!isRadio);
        setIsRadio(!isRadio);
    };

    // watch
    useEffect(() => {
        console.log();
    }, [isRadio]);

    //JSX
    return (
        <div>
            <p> Radio </p>
            <input type="radio" value={isRadio} id="radio" onChange={clickOnRadio} />
        </div>
    );
}

export default App;
