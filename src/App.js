import { useState, useEffect } from 'react';

function App() {
    const [laptop, setLaptop] = useState(false);

    const onChange = (e) => setLaptop(e.target.value);

    useEffect(() => {
        console.log(laptop);
    }, [laptop]);
    return (
        <form className="App">
            <h1>What do you want to laptop??</h1>
            <input type="checkbox" name="laptop" value="MacBook Air" onChange={onChange} /> Apple MacBook Air <br />
            <input type="checkbox" name="laptop" value="MacBook Pro" onChange={onChange} /> Apple MacBook Pro <br />
            <input type="checkbox" name="laptop" value="Galaxy Book" onChange={onChange} /> Samsung Galaxy Book <br />
            <input type="checkbox" name="laptop" value="Gram" onChange={onChange} /> LG Gram <br />
            <input type="checkbox" name="laptop" value="ZenBook" onChange={onChange} /> Asus ZenBook <br />
            <input type="submit" value="전송" />
            <input type="reset" value="Reset" />
        </form>
    );
}

export default App;
