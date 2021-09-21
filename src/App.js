import { useState, useEffect } from 'react';
import './App.css';

// Component
function App() {
    // State
    const [value, setValue] = useState('');

    // Event
    const onChange = (e) => setValue(e.target.value);
    const onReset = () => {
        setValue('');
    };

    // Watch
    useEffect(() => {
        console.log(value);
    }, [value]);
    // JSX
    return (
        <div className="App">
            <h1>TextArea</h1>
            <textarea value={value} onChange={onChange} />
            <br />
            <button type="submit">보내기</button>
            <button type="reset" onClick={onReset}>
                Reset
            </button>
        </div>
    );
}

export default App;
