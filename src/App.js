import { useState, useEffect } from 'react';
import './App.css';

// Component
function App() {
    // State
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    // Event
    const onChange = (e) => setValue(e.target.value);
    const onClick = () => {
        if (!value) {
            alert('write your to do');
        }
        setList((prevState) => [...prevState, value]);
        setValue('');
    };
    const onEdit = (index) => {
        console.log(index);

        const editText = prompt();
        console.log(editText);

        setList((prevState) => {
            const editList = prevState.map((item, i) => {
                return i === index ? editText : item;
            });
            return editList;
        });
    };
    // Watch
    useEffect(() => {
        console.log(value);
    }, [value]);

    // JSX
    return (
        <div className="App">
            <h1>To Do List</h1>
            <input value={value} onChange={onChange} />
            <button onClick={onClick}>ADD</button>
            <hr />
            {list.map((item, index) => (
                <div key={index}>
                    <input value={item} readOnly />
                    <button onClick={() => onEdit(index)}>Edit</button>
                </div>
            ))}
        </div>
    );
}

export default App;
