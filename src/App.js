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
    const onEdit = (index) => {
        const editText = prompt();
        setList((prevState) => {
            const editList = prevState.map((item, i) => {
                return i === index ? editText : item;
            });
            return editList;
        });
    };

    const onDelete = (index) => {
        setList((prevState) => {
            const deleteList = prevState.filter((item, i) => {
                return i !== index && item;
            });
            return deleteList;
        });
    };
    useEffect(() => {
        console.log(value);
    }, [value]);

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
                    <button onClick={() => onEdit(index)}>Edit</button>
                    <button onClick={() => onDelete(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default App;
