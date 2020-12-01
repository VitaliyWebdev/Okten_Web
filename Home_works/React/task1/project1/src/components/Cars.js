import React, {Component} from 'react';



const cars = [
    {
        model: 'BMW X7 M competition',
        madeYear: 2020,
        power: 550,
        color: 'blue',
        driver: {
            name: 'Yurii',
            age: 22,
            gender: 'male',
            experience: 4
        }
    },
    {
        model: 'BMW X5 M competition',
        madeYear: 2019,
        power: 500,
        color: 'white',
        driver: {
            name: 'Alex',
            age: 22,
            gender: 'male',
            experience: 4
        }
    },
    {
        model: 'BMW X3',
        madeYear: 2017,
        power: 250,
        color: 'black',
        driver: {
            name: 'Igor',
            age: 23,
            gender: 'male',
            experience: 3
        }
    },
];
class Cars extends Component {
    render() {
        this.cars=cars;
        return (
            <div className={"target"}>
                {
                    this.cars.map(car=>(<p>{car.model}-{car.madeYear}-{car.model}-{car.power}-{car.color}-{car.driver.name}-{car.driver.age}-{car.driver.gender}-{car.driver.experience}</p>))
                }
            </div>
        );
    }
}

export default Cars;

