import { useState, useEffect } from 'react';
import './App.css';

// Component
function App() {
    // State
    const [value, setValue] = useState('');

    // Event
    const onChange = (e) => setValue(e.target.value);

    // Watch

    // JSX
    return (
        <div className="App">
            <h1>To Do List</h1>
            <input value={value} onChange={onChange} />
        </div>
    );
}

export default App;
