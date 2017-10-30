/*
    Написати ланцюжок викликів.
    Завдання на використання this.
    Дописати реалызацыю методів, щоб можна було працювати з обєктом, як наведено нижче.
*/

var yaponohata = {
    sushi: 0,
    wasabi: 0,
    addOneSushi: function(sushi, suma) {
        this.sushi = 0
        this.suma = 1;
        sushi = sushi + suma ;

        console.log(sushi);

    },
    removeOneSushi: function(sushi) {

    },
    addOneWasabi: function() {

    },
    removeOneWasabi: function() {

    },
    cancelOrder: function() {

    },
    showOrder: function() {

    }
}
yaponohata.addOneSushi();
// yaponohata.addOneSushi().addOneWasabi().addOneSushi().showOrder(); // Your order is - sushi: 2, waasabi: 1
// yaponohata.addOneSushi().showOrder(); // Your order is - sushi: 1
// yaponohata.addOneSushi().addOneWasabi().cancelOrder(); // Nothing to show