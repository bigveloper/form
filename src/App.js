import { useState, useEffect } from 'react';
import './App.css';

// Component
function App() {
    // State
    const [value, setValue] = useState('');
    const [fileUp, setFileUp] = useState('');
    const [selected, setSelected] = useState([]);
    const itCompany = ['FaceBook', 'MS', 'Apple', 'Aamazon', 'Hancom'];

    // Event
    const onChange = (e) => setValue(e.target.value);
    const onReset = () => {
        setValue('');
    };
    const onFile = (e) => setFileUp(e.target.value);
    const onSelect = (e) => setSelected(e.target.selected);

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
            <hr />
            <h1> SelectBox </h1>
            <select value={selected} onSelect={onSelect}>
                {itCompany.map((item) => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default App;
