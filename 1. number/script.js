const convert = () => {

    var value = parseFloat(document.getElementById("dama").value);
    let selected = document.querySelector('input[name="unit"]:checked');

    var result

    if (!selected || isNaN(value)) {
        console.log("Error: Please enter a valid number and select a unit.");
        return;
    }



    if(selected.value == "far"){
        result = ( value - 32) / 1.8
    }else if(selected.value == "cel"){
        result = (value * 1.8) + 32
    }
    else{
         console.log("error")
    }
    console.log(result)
}
