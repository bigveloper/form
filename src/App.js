import { useState, useEffect } from 'react';
import './App.css';

// Component
function App() {
    // State
    const [value, setValue] = useState('');
    const [fileUp, setFileUp] = useState('');

    // Event
    const onChange = (e) => setValue(e.target.value);
    const onReset = () => {
        setValue('');
    };
    const onFile = (e) => setFileUp(e.target.value);

    // Watch
    useEffect(() => {
        console.log(value);
    }, [value]);

    useEffect(() => {
        console.log(fileUp);
    }, [fileUp]);
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
            <hr />
            <h1> File Upload </h1>
            <input type="file" value={fileUp} onChange={onFile} />
        </div>
    );
}

export default App;
