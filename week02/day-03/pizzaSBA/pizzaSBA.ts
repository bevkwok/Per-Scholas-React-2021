type toppingList = Array<string>;
type allPizzas = Array<Pizza>;
type AddressDetails = { street: string, city: string, zipCode: number };

interface PizzaRequirement {
    size: string;
    setSize: (a: string) => string;
    addTopping: (a: string) => toppingList;
    removeTopping: () => toppingList;
    makeVegetarian: () => string;
}

interface OrderRequirement {
    pizzaList: allPizzas;
    address: AddressDetails;
    isSubmit: boolean;
    SubmitOrder: () => string;
}

class Pizza implements PizzaRequirement {
    constructor(
        public size: string, 
        public vegetarian: boolean = false,
        public toppings: toppingList = []
    ) {}

    setSize(size: string) {
        switch(size) {
            case 'small' : 
                this.size = 'small';
                break;
            case 'medium' : 
                this.size = 'medium';
                break;            
            case 'large' : 
                this.size = 'large';
                break;
            default: 
                this.size = this.size;
                console.log('Please pick between small/medium/large.');
                break;
        }
        return `The pizza size is ${this.size}`;
    }

    addTopping(topping: string) {
        if(!this.vegetarian) {
            this.toppings.push(topping);
        } else {
            if(topping === 'pepperoni' || topping === 'sausage' || topping === 'ham' || topping === 'anchovies') {
                console.log('It\'s a vegetarian pizza, you can\'t add meat in there bro');
            } else {
                this.toppings.push(topping);
            }
        }
        return this.toppings;
    }

    removeTopping() {
        this.toppings.pop();
        return this.toppings;
    }

    makeVegetarian(): string { 
        let justVeggeiesTopping = this.toppings.filter((topping) => {
            if(topping === 'pepperoni' || topping === 'sausage' || topping === 'ham' || topping === 'anchovies') {
                return false;
            } 
            return true;
        })



        this.toppings = justVeggeiesTopping;
        console.log(this.toppings);
        return "This pizza is vegetarian pizza now"; 
    }
}

interface OrderRequirement {
    pizzaList: allPizzas;
    address: AddressDetails;
    SubmitOrder: () => string;
}


class Order implements OrderRequirement {
    public pizzaList: allPizzas; 
    public address: AddressDetails;
    public isSubmit: boolean = false;

    constructor(pizzaList: allPizzas | Pizza, address: AddressDetails, isSubmit: boolean = false){
        if(typeof pizzaList === typeof Pizza){
            const pizza = pizzaList as Pizza;
            this.pizzaList = [pizza];
        } else {
            const pizzas = pizzaList as allPizzas;
            this.pizzaList = pizzas;
        }

        this.address = address;
        this.isSubmit = isSubmit;
    }

    addPizza(pizza: Pizza) {
        if(!this.isSubmit) {
            this.pizzaList.push(pizza);
            return `You added more pizza in your order, now you have ${this.pizzaList.length} pizza`
        } else {
            return `Dude, you submitted your order earlier, can\'t make changes anymore.`
        }
    }

    removePizza() {
        if(!this.isSubmit) {
            this.pizzaList.pop();
            return `You have removed the last pizza, now you have ${this.pizzaList.length}`
        } else {
            return `Dude, you submitted your order earlier, can\'t make changes anymore.`
        }
    }

    SubmitOrder() {
        if(this.pizzaList.length < 1){
            return 'There\'s no pizza in your order.';
        } else {
            this.isSubmit = true;
            let submitMoment = new Date();
            const submitDate = submitMoment.getFullYear()+'-'+(submitMoment.getMonth()+1)+'-'+submitMoment.getDate();
            const submitTime = submitMoment.getHours() + ":" + submitMoment.getMinutes() + ":" + submitMoment.getSeconds();
            const submitDateTime = submitDate+' '+submitTime;
            let numOfPizza = this.pizzaList.length;
            return `Order has been submitted at ${submitDateTime} and you have ordered ${numOfPizza} pizza`;
        }
    }
}


// creating meat lover pizza
let meatLoverPizza = new Pizza('medium');
console.log('---- making a meat lover pizza ----');
console.log(meatLoverPizza);
console.log(meatLoverPizza.addTopping('ham'));
console.log(meatLoverPizza.addTopping('sausage'));
console.log(meatLoverPizza.addTopping('pepperoni'));
console.log(meatLoverPizza.removeTopping());
console.log(meatLoverPizza.setSize('large'));
console.log(meatLoverPizza.setSize('x'));


// creating vegan pizza
let veganPizza = new Pizza('small', true);
console.log('---- making vegan pizza ----');
console.log(veganPizza);
console.log(veganPizza.addTopping('onions'));
console.log(veganPizza.addTopping('spinach'));
console.log('-- trying to add ham into vegan pizza --');
console.log(veganPizza.addTopping('ham'));
console.log(veganPizza.removeTopping());


// creating cheese pizza for now
let maybeVeganPizza = new Pizza('large');
console.log('---- making cheese pizza and chaning it to vegan pizza ----');
console.log(maybeVeganPizza);
console.log(maybeVeganPizza.addTopping('ham'));
console.log(maybeVeganPizza.addTopping('sausage'));
console.log(maybeVeganPizza.addTopping('pepperoni'));
console.log(maybeVeganPizza.addTopping('onions'));
console.log(maybeVeganPizza.addTopping('spinach'));
console.log(maybeVeganPizza.makeVegetarian());


// getting the address and list of pizza before ordering
let bevAddress: AddressDetails = { street: 'ABC street', city: 'New York', zipCode: 10001 };
let allBevPizza: allPizzas = [meatLoverPizza];


// putting in address and pizza list from line 137 and 138 into the order
let bevOrder = new Order(allBevPizza, bevAddress);
console.log('---- first order ----');
console.log(bevOrder);
console.log(bevOrder.addPizza(veganPizza));
console.log(bevOrder.SubmitOrder());
console.log(bevOrder.addPizza(maybeVeganPizza));


// if there's no pizza in the order, will have error message
let emptyPizzaList = [];
let noPizzaOrder = new Order(emptyPizzaList, bevAddress);
console.log('---- empty pizza order ----');
console.log(noPizzaOrder);
console.log(noPizzaOrder.SubmitOrder());


// testing addPizza and removePizza function
let manyPizzas = [meatLoverPizza, veganPizza, maybeVeganPizza];
let partyAddress: AddressDetails = { street: 'Party street', city: 'Party city', zipCode: 99999 };
let partyOrder = new Order(manyPizzas, partyAddress);
console.log('---- group pizza order ----');
console.log(partyOrder);
console.log(partyOrder.removePizza());
console.log(partyOrder.addPizza(maybeVeganPizza));
console.log(partyOrder.SubmitOrder());
console.log(partyOrder.removePizza());














//////// for myself to look at later

        // let allMeatTopping = ['pepperoni', 'sausage', 'ham', 'anchovies'];

        // let justVeggeiesTopping = this.toppings.filter((topping) => {
        //     let meatTopping = allMeatTopping.forEach(meat => meat)
        //     if(meatTopping === topping) {
        //         return false;
        //     } 
        //     return true;
        // })