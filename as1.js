var validValues = ['1','2','3','4'];

// For getting the value to insert in the suduko table from keyboard
$(document).on('keypress', function (event) {
    console.log(event.key);
    if (validValues.includes(event.key)){
        console.log('inside if');
        setcurnumber(parseInt(event.key));
    }
});