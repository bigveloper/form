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
            <form onSubmit>
                <textarea value={value} onChange={onChange} />
                <br />
                <button onClick>submit</button>
            </form>
            <button type="reset" onClick={onReset}>
                Reset
            </button>
        </div>
    );
}

export default App;
