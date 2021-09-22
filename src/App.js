import { useState, useEffect } from 'react';
import './App.css';

// Component
function App() {
    // State
    const [tdSelect, setTdSelect] = useState('');
    const languageList = ['JavaScript', 'HTML', 'CSS', 'Java', 'Python'];

    // Event
    // const tdClick = (e) => {
    //     setTdSelect(e.target.value);
    //     return;
    // };
    const onSubmit = (e) => {
        setTdSelect(e.target.value);
        e.preventDefault();
    };

    // watch

    useEffect(() => {
        console.log(tdSelect);
    }, [tdSelect]);

    //JSX
    return (
        <form onSubmit={onSubmit}>
            <p>select box</p>
            <select value={tdSelect} onChange={onSubmit}>
                {languageList.map((item) => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default App;
