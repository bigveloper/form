import { useState, useEffect } from 'react';

function App() {
    const [camera, setCamera] = useState('');

    const onChange = (e) => setCamera(e.target.camera);

    useEffect(() => {
        console.log(camera);
    }, [camera]);

    return (
        <form>
            <h1> what is your favorite Camera brand</h1>
            <input type="radio" name="camera" value="Sony" onChange={onChange} /> Sony
            <input type="radio" name="camera" value="Cannon" onChange={onChange} /> Cannon
            <input type="radio" name="camera" value="Nikon" onChange={onChange} /> Nikon
        </form>
    );
}
export default App;
