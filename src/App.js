import { useState, useEffect } from 'react';

function App() {
    const [camera, setCamera] = useState('');
    const [laptop, setLaptop] = useState('');

    const onChange = (e) => setCamera(e.target.value);
    const onCheck = (e) => setLaptop(e.target.value);

    useEffect(() => {
        console.log(camera);
    }, [camera]);

    useEffect(() => {
        console.log(laptop);
    }, [laptop]);

    return (
        <form>
            <h1> what is your favorite Camera brand??</h1>
            <input type="radio" name="camera" value="Sony" onChange={onChange} /> Sony <br />
            <input type="radio" name="camera" value="Cannon" onChange={onChange} /> Cannon <br />
            <input type="radio" name="camera" value="Nikon" onChange={onChange} /> Nikon <br />
            <input type="radio" name="camera" value="Pannasonic" onChange={onChange} /> Pannasonic <br />
            <input type="submit" />
            <input type="reset" />
            <hr />
            <h1>what is your favorite laptop??</h1>
            <input type="checkbox" name="laptop" value="MacBookAir" onChange={onCheck} /> MacBook Air <br />
            <input type="checkbox" name="laptop" value="MacBookPro" onChange={onCheck} /> MacBook Pro <br />
            <input type="checkbox" name="laptop" value="GalaxyBook" onChange={onCheck} /> Galaxy Book <br />
            <input type="checkbox" name="laptop" value="ZenBook" onChange={onCheck} /> ZenBook <br />
            <input type="checkbox" name="laptop" value="Gram" onChange={onCheck} /> Gram <br />
            <input type="submit" />
            <input type="reset" />
        </form>
    );
}
export default App;
