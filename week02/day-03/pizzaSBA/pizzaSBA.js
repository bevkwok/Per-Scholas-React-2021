var Pizza = /** @class */ (function () {
    function Pizza(size, vegetarian, toppings) {
        if (vegetarian === void 0) { vegetarian = false; }
        if (toppings === void 0) { toppings = []; }
        this.size = size;
        this.vegetarian = vegetarian;
        this.toppings = toppings;
    }
    Pizza.prototype.setSize = function (size) {
        switch (size) {
            case 'small':
                this.size = 'small';
                break;
            case 'medium':
                this.size = 'medium';
                break;
            case 'large':
                this.size = 'large';
                break;
            default:
                this.size = this.size;
                console.log('Please pick between small/medium/large.');
                break;
        }
        return "The pizza size is " + this.size;
    };
    Pizza.prototype.addTopping = function (topping) {
        if (!this.vegetarian) {
            this.toppings.push(topping);
        }
        else {
            if (topping === 'pepperoni' || topping === 'sausage' || topping === 'ham' || topping === 'anchovies') {
                console.log('It\'s a vegetarian pizza, you can\'t add meat in there bro');
            }
            else {
                this.toppings.push(topping);
            }
        }
        return this.toppings;
    };
    Pizza.prototype.removeTopping = function () {
        this.toppings.pop();
        return this.toppings;
    };
    Pizza.prototype.makeVegetarian = function () {
        var justVeggeiesTopping = this.toppings.filter(function (topping) {
            if (topping === 'pepperoni' || topping === 'sausage' || topping === 'ham' || topping === 'anchovies') {
                return false;
            }
            return true;
        });
        this.toppings = justVeggeiesTopping;
        console.log(this.toppings);
        return "This pizza is vegetarian pizza now";
    };
    return Pizza;
}());
var Order = /** @class */ (function () {
    function Order(pizzaList, address, isSubmit) {
        if (isSubmit === void 0) { isSubmit = false; }
        this.isSubmit = false;
        if (typeof pizzaList === typeof Pizza) {
            var pizza = pizzaList;
            this.pizzaList = [pizza];
        }
        else {
            var pizzas = pizzaList;
            this.pizzaList = pizzas;
        }
        this.address = address;
        this.isSubmit = isSubmit;
    }
    Order.prototype.addPizza = function (pizza) {
        if (!this.isSubmit) {
            this.pizzaList.push(pizza);
            return "You added more pizza in your order, now you have " + this.pizzaList.length + " pizza";
        }
        else {
            return "Dude, you submitted your order earlier, can't make changes anymore.";
        }
    };
    Order.prototype.removePizza = function () {
        if (!this.isSubmit) {
            this.pizzaList.pop();
            return "You have removed the last pizza, now you have " + this.pizzaList.length;
        }
        else {
            return "Dude, you submitted your order earlier, can't make changes anymore.";
        }
    };
    Order.prototype.SubmitOrder = function () {
        if (this.pizzaList.length < 1) {
            return 'There\'s no pizza in your order.';
        }
        else {
            this.isSubmit = true;
            var submitMoment = new Date();
            var submitDate = submitMoment.getFullYear() + '-' + (submitMoment.getMonth() + 1) + '-' + submitMoment.getDate();
            var submitTime = submitMoment.getHours() + ":" + submitMoment.getMinutes() + ":" + submitMoment.getSeconds();
            var submitDateTime = submitDate + ' ' + submitTime;
            var numOfPizza = this.pizzaList.length;
            return "Order has been submitted at " + submitDateTime + " and you have ordered " + numOfPizza + " pizza";
        }
    };
    return Order;
}());
// creating meat lover pizza
var meatLoverPizza = new Pizza('medium');
console.log('---- making a meat lover pizza ----');
console.log(meatLoverPizza);
console.log(meatLoverPizza.addTopping('ham'));
console.log(meatLoverPizza.addTopping('sausage'));
console.log(meatLoverPizza.addTopping('pepperoni'));
console.log(meatLoverPizza.removeTopping());
console.log(meatLoverPizza.setSize('large'));
console.log(meatLoverPizza.setSize('x'));
// creating vegan pizza
var veganPizza = new Pizza('small', true);
console.log('---- making vegan pizza ----');
console.log(veganPizza);
console.log(veganPizza.addTopping('onions'));
console.log(veganPizza.addTopping('spinach'));
console.log('-- trying to add ham into vegan pizza --');
console.log(veganPizza.addTopping('ham'));
console.log(veganPizza.removeTopping());
// creating cheese pizza for now
var maybeVeganPizza = new Pizza('large');
console.log('---- making cheese pizza and chaning it to vegan pizza ----');
console.log(maybeVeganPizza);
console.log(maybeVeganPizza.addTopping('ham'));
console.log(maybeVeganPizza.addTopping('sausage'));
console.log(maybeVeganPizza.addTopping('pepperoni'));
console.log(maybeVeganPizza.addTopping('onions'));
console.log(maybeVeganPizza.addTopping('spinach'));
console.log(maybeVeganPizza.makeVegetarian());
// getting the address and list of pizza before ordering
var bevAddress = { street: 'ABC street', city: 'New York', zipCode: 10001 };
var allBevPizza = [meatLoverPizza];
// putting in address and pizza list from line 137 and 138 into the order
var bevOrder = new Order(allBevPizza, bevAddress);
console.log('---- first order ----');
console.log(bevOrder);
console.log(bevOrder.addPizza(veganPizza));
console.log(bevOrder.SubmitOrder());
console.log(bevOrder.addPizza(maybeVeganPizza));
// if there's no pizza in the order, will have error message
var emptyPizzaList = [];
var noPizzaOrder = new Order(emptyPizzaList, bevAddress);
console.log('---- empty pizza order ----');
console.log(noPizzaOrder);
console.log(noPizzaOrder.SubmitOrder());
// testing addPizza and removePizza function
var manyPizzas = [meatLoverPizza, veganPizza, maybeVeganPizza];
var partyAddress = { street: 'Party street', city: 'Party city', zipCode: 99999 };
var partyOrder = new Order(manyPizzas, partyAddress);
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
