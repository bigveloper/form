import { useState, useEffect } from 'react';
import './App.css';

// Component
function App() {
    // State
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    // Evnet
    const onChange = (e) => setValue(e.target.value);
    const onClick = () => {
        if (!value) {
            alert('write something');
        }
        setList((prevState) => [...prevState, value]);
        setValue('');
    };

    // Watch

    //JSX
    return (
        <div className="App">
            <h1>To Do List</h1>
            <input value={value} onChange={onChange} />
            <button onClick={onClick}>ADD</button>
            {list.map((item, index) => (
                <div key={index}>
                    <input value={item} readOnly />
                </div>
            ))}
        </div>
    );
}

export default App;
