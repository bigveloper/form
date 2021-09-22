import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [check, setCheck] = useState('');

    const onChange = () => {
        setCheck(!check);
    };

    useEffect(() => {
        console.log(check);
    }, [check]);
    return (
        <form>
            <h1>CheckBox</h1>
            <label>
                <input type="checkbox" value={check} name="React" onChange={onChange} /> React
            </label>
            <br />
            <label>
                <input type="checkbox" value={check} name="vue" onChange={onChange} /> Vue
            </label>
            <br />
            <input type="submit" />
        </form>
    );
}

export default App;
