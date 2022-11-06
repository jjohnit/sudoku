var validValues = ['1','2','3','4', ' '];

// For getting the value to insert in the suduko table from keyboard
$(document).on('keypress', function (event) {
    if (validValues.includes(event.key)){
        let key = (event.key == ' ') ? 0 : parseInt(event.key);
        setcurnumber(key);
        // Add log whenever a valid entry is done
        $(document).trigger('log', ['input-from-keyboard', {
            keyPressed: event.code
          }]);
    }
});