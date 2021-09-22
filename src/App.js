import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [age, setAge] = useState(false);
    const [laptop, setLaptop] = useState(false);
    const [fruit, setFruit] = useState('');

    const onChange = (e) => setAge(e.target.value);
    const onCheck = (e) => setLaptop(e.target.value);
    const onFruit = (e) => setFruit(e.target.value);

    useEffect(() => {
        console.log(age);
    }, [age]);

    useEffect(() => {
        console.log(laptop);
    }, [laptop]);

    useEffect(() => {
        console.log(fruit);
    }, [fruit]);

    return (
        <form className="App">
            <h1> What is your age range? </h1>
            <input type="radio" name="age" value="10" onChange={onChange} /> 10대 <br />
            <input type="radio" name="age" value="20" onChange={onChange} /> 20대 <br />
            <input type="radio" name="age" value="30" onChange={onChange} /> 30대 <br />
            <input type="radio" name="age" value="40" onChange={onChange} /> 40대 <br />
            <input type="submit" />
            <input type="reset" />
            <hr />
            <h1> What do you wnat to Laptop </h1>
            <input type="checkbox" name="laptop" value="MacBookAir" onChange={onCheck} /> MacBook Air <br />
            <input type="checkbox" name="laptop" value="MacBookPro" onChange={onCheck} /> MacBook Pro <br />
            <input type="checkbox" name="laptop" value="GalaxyBook" onChange={onCheck} /> MacBook Air <br />
            <input type="checkbox" name="laptop" value="MacBookAir" onChange={onCheck} /> MacBook Air <br />
            <input type="submit" />
            <input type="reset" />
            <hr />
            <select name="fruit" onChange={onFruit}>
                <option value="Apple" name="fruit">
                    apple
                </option>
                <option value="Banana" name="fruit">
                    banana
                </option>
                <option value="Kiwi" name="fruit">
                    kiwi
                </option>
                <option value="Grape" name="fruit">
                    grape
                </option>
                <option value="Melon" name="fruit">
                    melon
                </option>
            </select>
            <br />
            <input type="submit" />
            <input type="reset" />
        </form>
    );
}

export default App;
