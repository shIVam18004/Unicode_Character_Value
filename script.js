function detectChar(){
    const input = document.getElementById("InputType").value;

    if(input){
        const unicodeValue = input.charCodeAt(0);
        document.getElementById('result').textContent = `The unicode value of "${input}" is ${unicodeValue}`;
    } else {
        document.getElementById('result').textContent = "Please enter a character.";
    }
}
