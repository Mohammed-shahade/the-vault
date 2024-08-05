const adjectiveinput = document.getElementById('adjective');
const nouninput = document.getElementById('noun');
const verbinput = document.getElementById('verb');
const num1input = document.getElementById('num1');
const num2input = document.getElementById('num2');
const submitButton = document.getElementById('submit');
const outputParagraph = document.getElementById('output');
submitButton.addEventListener('click', function(){
    const adjective = adjectiveinput.value;
    const noun = nouninput.value;
    const verb = verbinput.value;
    const num1 = parseFloat(num1input.value);
    const num2 = parseFloat(num2input.value);
    const sum = num1 + num2;
    outputParagraph.textContent = "Once upon a time there were many " + adjective + " cats who stole " + noun + " at night while people were " + verb + "! A a total of " + sum + " times.";
});

