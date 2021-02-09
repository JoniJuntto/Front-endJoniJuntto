import React, { useState } from 'react';

function Henkilolomake() {
    const [henkilo, setHenkilo] = useState({
        nimi: '',
        paiva: '',
        arvosana: 0
    });

    const changeValues = (e) => {
        setHenkilo({
            ...henkilo,
            [e.target.name]: e.target.value
        });
    };

    const addValue = (e) => {
        if (henkilo.nimi === '' || henkilo.paiva === '' || henkilo.arvosana === 0) {
            alert('Kaikissa kentissä pitää olla arvot')
        }
        else {
            e.preventDefault();
            setHenkilo({
                nimi: '',
                paiva: '',
                arvosana: 0
            })
        }

    }

    return (
        <form>
            <label htmlFor='nimi'>Nimi </label>
            <input type='text' name='nimi' value={henkilo.nimi} onChange={(e) => changeValues(e)} /> <br />
            <label htmlFor='paiva'>Päivä </label>
            <input type='text' name='paiva' value={henkilo.paiva} onChange={(e) => changeValues(e)} /> <br />
            <label htmlFor='arvosana'>Arvosana </label>
            <input type='number' name='arvosana' value={henkilo.arvosana} onChange={(e) => changeValues(e)} />
            <input type='submit' value='Lisää' onClick={(e) => addValue(e)} />
        </form>
    );
}
export default Henkilolomake;