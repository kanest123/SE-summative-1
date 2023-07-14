function calculate() {
    event.preventDefault();
    // Get input values
    var num1 = parseInt(document.getElementById('age').value);
    var num2 = parseInt(document.getElementById('height').value);
    var num3 = parseInt(document.getElementById('weight').value);
    var num4 = parseInt(document.getElementById('sex').value);

    // Perform calculation
    var result = Math.round(((num1 + num2)/num3) * num4);


    // Display the result
    document.getElementById('result').innerHTML = 'Predicted Implant size is: ' + result + ' +/- 2 sizes';
    
}