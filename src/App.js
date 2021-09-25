import { useState, useEffect } from 'react';

function App() {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);

    const onChange = (e) => setValue(e.target.value);
    const onClick = () => {
        if (!value) {
            alert('write your To Do');
            return;
        }
        setList((prevState) => [...prevState, value]);
        setValue('');
    };

    useEffect(() => {
        console.log(value);
    }, [value]);

    return (
        <div>
            <h1>To Do List</h1>
            <input value={value} onChange={onChange} />
            <button onClick={onClick}>Add</button>
            {list.map((item, index) => (
                <div key={index}>
                    <input value={item} readOnly />
                </div>
            ))}
        </div>
    );
}

export default App;
