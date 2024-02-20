import { useState } from "react";

const PersonWrapper = () => {

    const[person, setPerson] = useState({
        name: "",
        email: "",
        age: "",
        subscribe: false,
        gender: "",
        message: "",
    });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleChange = e => {}

    const handleSubmit = e => {
        e.preventDefault();
    }

    return <div>
        <h1>Person</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                type="text" 
                name="name" 
                value={person.name} 
                onChange={handleChange} 
                />
                <label>Email:</label>
                <input 
                type="email" 
                name="email" 
                value={person.email} 
                onChange={handleChange} 
                />
                <label>Age:</label>
                <input 
                type="number" 
                name="number" 
                value={person.age} 
                onChange={handleChange} 
                />
                <label>Subscribe to newsletter:</label>
                <input 
                type="checkbox" 
                name="subscribe" 
                value={person.subscribe} 
                onChange={handleChange} 
                />
                <label>Select gender:</label>
                <select 
                name="gender" 
                value={person.gender} 
                onChange={handleChange} 
                id="">
                    <option value="">Male</option>
                    <option value="">Female</option>
                </select>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
}

export default PersonWrapper;