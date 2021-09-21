import { useState, useEffect } from 'react';
import './App.css';

// Component
function App() {
    // State
    const [value, setValue] = useState('');
    const [fileUp, setFileUp] = useState('');
    const [selected, setSelected] = useState('');
    const [selList, setSelList] = useState(['FaceBook', 'MS', 'Apple', 'Aamazon', 'Hancom']);
    // Event
    const onChange = (e) => setValue(e.target.value);
    const onReset = () => {
        setValue('');
    };
    const onFile = (e) => setFileUp(e.target.value);

    const onSelect = (index) => {
        setSelList((prevState) => {
            const selectList = prevState.filter((item, i) => {
                return i === index && item;
            });
            return selectList;
        });
    };

    // Watch
    useEffect(() => {
        console.log(value);
    }, [value]);

    useEffect(() => {
        console.log(fileUp);
    }, [fileUp]);

    useEffect(() => {
        console.log(selected);
    }, [selected]);

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
            <select value={selected} onChange={onSelect}>
                {selList.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
        </div>
    );
}

export default App;
