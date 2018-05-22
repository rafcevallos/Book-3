// Advisor Name = Babs Adviserton

const babsAdviserston = Object.create({}, {
    company: {
        enumerable: true,
        writable: true,
        value: "Poop Industries"
    },
    specialty: {
        enumerable: true,
        writable: true,
        value: "Poop"
    },
    name: {
        enumerable: true,
        writable: false,
        value: "Babs Adviserton"
    },
    portfolio: {
        enumerable: false,
        writable: false,
        value: []
    },
    worth: {
        value: function () {
            for (i = 0; i < portfolio.length; i++) {

            } // quantity * price   
        }
    },
    purchase: {
        value: function (symbol, quantity, price) {
            const purchaseStock = {
                symbol, 
                quantity,
                price,
                transaction: purchased
            }
         return babsAdviserston.portfolio.push(purchaseStock)  /* return kicks/pushes value out of the object in purchase */
        }
    },
    sell: {
        value: function (symbol, quantity, price) {
            const sellStock = {
                symbol,
                quantity,
                price,
                transaction: sold

            }
        return babsAdviserston.portfolio.push(sellStock) /* return kicks/pushes value out of the object in purchase */
        }
    }
})

babsAdviserston.purchase("Poople", 200, 50)
babsAdviserston.purchase("Scoople", 100, 75)
babsAdviserston.purchase("WeePee", 50, 100)
babsAdviserston.purchase("Bad", 50, 200)
babsAdviserston.purchase("Nope", 25, 300)
babsAdviserston.purchase("Run Away", 30, 350)
console.log(babsAdviserston.portfolio)


