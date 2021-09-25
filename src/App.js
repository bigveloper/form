import { useState, useEffect } from 'react';

function App() {
    const [car, setCar] = useState('');

    const onChange = (e) => setCar(e.target.value);

    useEffect(() => {
        console.log(car);
    }, [car]);

    return (
        <form>
            <h1> What is your favorite Car Brand </h1>
            <input type="radio" name="car" value="Benz" onChange={onChange} />
            Benz
            <br />
            <input type="radio" name="car" value="Audi" onChange={onChange} />
            Audi
            <br />
            <input type="radio" name="car" value="Ford" onChange={onChange} />
            Ford
            <br />
            <input type="radio" name="car" value="GM" onChange={onChange} />
            GM
            <br />
            <input type="radio" name="car" value="Hyundai" onChange={onChange} />
            Hyundai
            <br />
            <input type="submit" />
            <input type="reset" />
        </form>
    );
}

export default App;
