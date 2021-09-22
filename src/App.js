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
        <form>
            <p>Fruit</p>
            <label>
                <input type="radio" name="fruit" value="apple" /> Apple
            </label>
            <label>
                <input type="radio" name="fruit" value="banana" /> Banana
            </label>
            <input type="submit" value="Submit" /> <input type="reset" value="Reset" />
        </form>
    );
}

export default App;
