import React from 'react';
import {useSelector} from 'react-redux'

function Header() {

    const gotAnimal = useSelector(store => store.sendAnimals);
    const gotPlant = useSelector(store => store.sendPlants);

    return (
        <div>
            <h2>Header</h2>
            <h3>This is the Animal we sent: {gotAnimal}</h3>
            <h3>This is the Plant we sent: {gotPlant}</h3>
        </div>
    );
}

export default Header;
