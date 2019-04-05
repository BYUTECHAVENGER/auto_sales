function addCar() {
    var Make = $('#Make').val();
    var Model = $('#Model').val();
    var Color = $('#Color').val();
    var Year = $('#Year').val();
    var Class = $('#Class').val();
    var Doors = $('#Doors').val();
    var Price = $('#Price').val();
    var URL = $('#URL').val();

    var query = {make: Make ,model: Model,color: Color, manu_year: Year, class: Class, doors: Doors, price: Price, img: URL}

    $.get('CreateAuto', query, function(result) {
        console.log (result);

        
        $('#DATA_MESSAGE').html(result.message);
    })
}
