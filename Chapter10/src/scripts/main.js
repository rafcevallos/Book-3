const $ = require("jquery")

$.ajax("http://localhost:8088/food")
    .then(response => {
        console.log(response)
    })
    .then(() => {
        $.ajax({
            url: "http://localhost:8088/food/",
            method: "POST",
            data: {
                "id": 4,
                "name": "Ice Cream",
                "type": "dessert",
                "ethnicity": "Da World",
                "sideDishes": "Nuts"
            }
        })
    })

// .then (used to be called .success) is a "PROMISE" -- chains order of operations into one level