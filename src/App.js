import { useState, useEffect } from 'react';
import './App.css';

// Component
function App() {
    const [laptop, setLaptop] = useState('');

    // State

    // Event

    // Watch

    // JSX
    return (
        <div className="App">
            <label>Laptop</label>
            <input type="radio" value="MacBook Air" name={laptop} checked={laptop === 'MacBook Air'} onClick={() => setLaptop('MacBook Air')} />
        </div>
    );
}

export default App;

// const ListCreateNew = () => {
//     const [gender, setGender] = useState('Male');
//     return (
//         <Form.Group inline>
//             <label>Gender</label>
//             <Form.Field control={Radio} label="Male" checked={gender === 'Male'} value="Male" onClick={() => setGender('Male')} />
//             <Form.Field control={Radio} label="Female" checked={gender === 'Female'} value="Female" onClick={() => setGender('Female')} />
//         </Form.Group>
//     );
// };
