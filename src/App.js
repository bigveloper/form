import { useState, useEffect } from 'react';
import './App.css';

// Component
function App() {
    // State
    const [value, setValue] = useState('');
    // Evnet
    const onChange = (e) => setValue(e.target.value);

    // Watch

    //JSX
    return (
        <div>
            <input value={value} onChange={onChange} />
        </div>
    );
}
