import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [textArea, setTextArea] = useState('');

    const onTextArea = (e) => setTextArea(e.target.value);

    return (
        <form className="App">
            <h1>TextArea</h1>
            <textarea type="text" value={textArea} placeholder="글을 입력하시죠?" onChange={onTextArea} />
            <br />
        </form>
    );
}

export default App;
