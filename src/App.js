import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './App.css';

function App() {
    const [mac, setMac] = useState('');

    const onChange = (e) => setMac(e.target.value);

    useEffect(() => {
        console.log(mac);
    }, [mac]);
    return (
        <form>
            <h1>What do you want to Mac series</h1>
            <input type="radio" name="mac" value="MacBook Air" onChange={onChange} /> MacBook Air <br />
            <input type="radio" name="mac" value="MacBook pro" onChange={onChange} /> MacBook pro <br />
            <input type="radio" name="mac" value="Mac mini" onChange={onChange} /> Mac mini <br />
            <input type="radio" name="mac" value="Mac pro" onChange={onChange} /> Mac mini
        </form>
    );
}

export default App;
