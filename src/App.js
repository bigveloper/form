import { useEffect, useState } from 'react';
import './App.css';

// Component
function App() {
    // State
    const [isRadio, setIsRadio] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    // Event
    const checkBrand = (e) => setIsRadio(!isRadio);
    const checkFw = (e) => setIsChecked(!isChecked);
    // Watch
    useEffect(() => {
        console.log(isRadio);
    }, [isRadio]);

    // JSX
    return (
        <div className="App">
            <h1> Radio </h1>
            <p>what is your favorite It company?</p>
            <label>
                Apple
                <input type="radio" checked={isRadio} id="brand1" name="brand" onChange={checkBrand} />
            </label>
            <br />
            <label>
                Amazon
                <input type="radio" checked={isRadio} id="brand2" name="brand" onChange={checkBrand} />
            </label>
            <br />
            <label>
                MS
                <input type="radio" checked={isRadio} id="brand3" name="brand" onChange={checkBrand} />
            </label>
            <hr />
            <label>
                React 가 좋습니까?
                <input type="checkbox" checked={isChecked} id="fw" name="fw" onChange={checkFw} />
            </label>
        </div>
    );
}

export default App;
