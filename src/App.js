import { useState, useEffect } from 'react';
import './App.css';

// Component
function App() {
    // State
    const [tdSelect, setTdSelect] = useState('');
    const languageList = ['JavaScript', 'HTML', 'CSS'];

    // Event
    const tdClick = (e) => {
        setTdSelect(e.target.value);
        console.log(tdSelect);
        return;
    };

    // watch

    useEffect(() => {
        console.log(tdSelect);
    }, [tdSelect]);

    //JSX
    return (
        <div>
            <p>select box</p>
            <select value={tdSelect} onChange={tdClick}>
                {languageList.map((item) => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default App;
