import { useState, useEffect } from 'react';

function App() {
    const [laptop, setLaptop] = useState('');

    const onChange = (e) => setLaptop(e.target.value);

    useEffect(() => {
        console.log(laptop);
    }, [laptop]);

    return (
        <form>
            <h1>What do you want to laptop?</h1>
            <input type="checkbox" name="laptop" value="MacBookAir" onChange={onChange} />
            MacBook Air
            <br />
            <input type="checkbox" name="laptop" value="MacBookPro" onChange={onChange} />
            MacBook Pro
            <br />
            <input type="checkbox" name="laptop" value="GalaxyBook" onChange={onChange} />
            GalaxyBook
            <br />
            <input type="checkbox" name="laptop" value="MacBookAir" onChange={onChange} />
            ZenBook
            <br />
            <input type="submit" />
            <br />
            <input type="reset" />
        </form>
    );
}

export default App;
