let cars = [
    {
        id: 1,
        model: "urus",
        company: "lamborgini",
        price: 266000,
        engineForce: 6.5
    },
    {
        id: 2,
        model: "cheron",
        company: "buggatti",
        price: 500000,
        engineForce: 9.9
    },
    {
        id: 3,
        model: "malibu 2",
        company: "gm",
        price: 33000,
        engineForce: 2.4
    },
    {
        id: 4,
        model: "gentra",
        company: "gm",
        price: 17000,
        engineForce: 1.5
    },
    {
        id: 5,
        model: "gelen vagen",
        company: "mercedes",
        price: 300000,
        engineForce: 4
    },
    {
        id: 6,
        model: "matiz",
        company: "daewoo",
        price: 3000,
        engineForce: 6
    },
    {
        id: 7,
        model: "aston martin",
        company: "daewoo",
        price: 3000,
        engineForce: 6
    }
]
let i = ''



cars.sort(function (a, b) {
    if (a.engineForce > b.engineForce) {
        return -1
    }
    if (a.engineForce < b.engineForce) {
        return 1
    }
})


console.log(cars);

cars.forEach((car) => {
    car.sale = ''
    if (car.price <= 33000) {
        car.sale = 'sale'
    }
    console.log(car.engineForce * 10 / 100);
    document.write(`
        Model: ${car.model} <br>
        Price: ${car.price > 100000 ? `<b>${car.price}</b>` : `<span>${car.price}</span>`} <br>
        Company: ${car.company} <br> <p class="sale">${car.sale}</p>
        <p class="prosent">
        prosent: ${car.engineForce * 100 / 10} %
      </p>   
     
        <div class="engine" >
<div class="fill" style="width: ${car.engineForce * 100 / 10}%" ></div>
        </div>
<br>
`)
})
console.log(cars);  