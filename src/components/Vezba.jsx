import { useState } from "react";

const Vezba = () => {
    const [osoba, setOsoba] = useState({
        ime: "",
        email: "",
        godine: "",
        pretplata: "",
        pol: "",
        poruka: "",
    });

    const handleChange = (e) => {
        const ime = e.target.name;
        const value = e.target.value;
        setOsoba(prevState => ({ ...prevState, [ime]: value }));
    }

    return(
    <form>
        <p>Ime: {osoba.ime}</p>
        <input type="text" name="ime" onChange={handleChange} />

        <p>Email:</p>
        <input type="email" name="email" />

        <p>Godine:</p>
        <input type="number" name="godine" />

        <p>Pretplata:</p>
        <input type="checkbox" name="pretplata" />

        <p>Pol:</p>
        <select>
            <option value="muski">Muski</option>
            <option value="zenski">Zenski</option>
        </select>

        <p>Poruka:</p>
        <input type="text" name="poruka" />

        <p>Posalji:</p>
        <input type="submit" value="Submit" />
    </form>
    );
};

export default Vezba;