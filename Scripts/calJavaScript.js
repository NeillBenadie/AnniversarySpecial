const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-clear]')
const screenValueText = document.querySelector('[data-screen]')
// const ourLogo = document.getElementById('#OurLogo');
const buttons = Array.from(document.getElementsByClassName('button'))

const ilyTotal = document.getElementById("alert");
ilyTotal.style.visibility = "hidden";
ilyTotal.style.color = "black";
ilyTotal.style.backgroundColor = "rgb(199, 36, 231)";

let savedValueText;
let AmountSaidIly = 0;
let wholeEquation = '';

numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.anotherNumber(button.innerText);
		calculator.updateScreen();
	})
})
operationButtons.forEach(button => {
	button.addEventListener('click', () => {
        calculator.iLoveYou();
		calculator.chosenOperation(button.innerText);
		calculator.updateScreen();
	})
})
equalsButton.addEventListener('click', button => {
	calculator.operate();
	calculator.updateScreen();
}) 
allClearButton.addEventListener('click', button => {
	calculator.clearAll();
	calculator.updateScreen();
}) 
deleteButton.addEventListener('click', button => {
    calculator.iLoveYou();
	calculator.removeOne();
	calculator.updateScreen();
})
buttons.map( button => { 
    button.addEventListener('click', (e) => {//Saving the entire equation in to a var
        switch(e.target.innerText){
            case 'AC':
				wholeEquation = ''
            case '=' :
                break;
            case '←':
				if (wholeEquation){
					wholeEquation = wholeEquation.slice(0, -1);
				}
                break;
            default:
                wholeEquation += e.target.innerText;
        }
    });
});


class Calculator {
	constructor(savedValueText, screenValueText) {
		this.savedValueText = savedValueText;
		this.screenValueText = screenValueText;
        this.AmountSaidIly = AmountSaidIly;
	  	this.clearAll();
	}

    iLoveYou() {
        console.log("I LOVE YOU"); //remember to remove this at the end
        console.log("");			//and this
        this.AmountSaidIly = this.AmountSaidIly + 1;

        let fullWidth = window.innerWidth - 100;
        let fullHeight = window.innerHeight - 100;

		let items = ['I LOVE YOU', 'I love You, babe!', 'I love you my darling', 'ey! I love YOU!',
		'Ek is lief vir jou!', 'I love YOU SO MUCH!!', 'Love you, my Angel', 'I love you, Michaela',
		'HEY!! I Love you long time!', 'I love you, Always!', 'For Always my love', 'Hi my Love, I love you!', 
		`I LOVE YOU, Lilian Michaela D'Alton`];
		let item = items[Math.floor(Math.random()*items.length)];

		let elem = document.createElement("div");
		elem.textContent = item;
		elem.style.position = "absolute";
		elem.style.left = Math.round(Math.random() * fullWidth) + "px";
		elem.style.top = Math.round(Math.random() * fullHeight) + "px";
		elem.setAttribute("id", "TempIly");
		document.body.appendChild(elem);

		let sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
		let deleteIly = async () => {
		await sleep(1000)
		document.body.removeChild(elem)
		}
		deleteIly();
	}
	ShowTotalIlyFunction(){
		let ilyMoreThanTwo = [`I just told you ${this.AmountSaidIly} times that I love you, and you didn't say it back o.O`, `${this.AmountSaidIly} times, I told you I love you -.-`, `I told you ${this.AmountSaidIly} times that I love you hey...`, `oi! I told you ${this.AmountSaidIly} times that I love you!`, `Oh! look at that: ${this.AmountSaidIly} times I told you I love you.`];
		let ilyMoreThanOne = [`Babe I just told you twice, that I love you`, `That's Two times I told you I love you`, `Twice I got left Hanging...`, `My Steri Stumpi... I told you twice I love you`, `Babe, I love you twice neh...`, `HEY!!! I told you, that I love you twice now...`];
		let ilyJustOnce = [`hmmmm... I just told you that I love you, and you didn't say it back `, `BABE! I TOLD YOU I LOVE YOU -.-`, `I LOVE YOU MUCH MUCH`, `OI!! I said I love you`, `REEE I told you, I love you and nothing?`,`Did you not see I told you that I love you?`, `HEEYY!! I told you I love you...`,`Why ignore me after I declared my love for you`];

		if(this.AmountSaidIly > 2){
			let ilySentence = ilyMoreThanTwo[Math.floor(Math.random()*ilyMoreThanTwo.length)];
			ilyTotal.style.visibility = "visible";
			let paragraph = ilyTotal;
			paragraph.textContent = ilySentence;

			let sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
			let deleteIlyText = async () => {
			await sleep(3000)
			document.getElementById("alert").style.visibility = "hidden"
			}
			deleteIlyText();

			console.log(`I just told you ${this.AmountSaidIly} times that I love you, and you didn't say it back o.O`);//delete this
		}else if(this.AmountSaidIly == 2){
			let ilySentence = ilyMoreThanOne[Math.floor(Math.random()*ilyMoreThanOne.length)];
			ilyTotal.style.visibility = "visible";
			let paragraph = ilyTotal;
			paragraph.textContent = ilySentence;

			let sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
			let deleteIlyText = async () => {
			await sleep(3000)
			document.getElementById("alert").style.visibility = "hidden"
			}
			deleteIlyText();

			console.log(`Thats twice I told you I love you hey...`);	//Delete this	
		}else{
			let ilySentence = ilyJustOnce[Math.floor(Math.random()*ilyJustOnce.length)];
			ilyTotal.style.visibility = "visible";
			let paragraph = ilyTotal;
			paragraph.textContent = ilySentence;

			let sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
			let deleteIlyText = async () => {
			await sleep(3000)
			document.getElementById("alert").style.visibility = "hidden"
			}
			deleteIlyText();

			console.log(`I just told you that "I love you", and you didn't say it back :( `);	//Delete this	
		}	
	}

	wholeEquationFun(){
		console.log(`Total equation: ${wholeEquation}`);
		if (wholeEquation == "1999*2+7/8"){
			this.screenValue = "Downloaded..."
	}

	clearAll() {
		this.screenValue = '';
		this.savedValue = '';
		this.operation = undefined;
		this.AmountSaidIly = AmountSaidIly;
	}
	removeOne() {
		this.screenValue = this.screenValue.toString().slice(0, -1);
	}
	anotherNumber(number) {
		if (number === '0' && this.screenValue.toString() ==='0') return; //stops the function if the user wants to spam '0' from the start
		if (number === '.' && this.screenValue.includes('.')) return; //stops the function if there is already '.' in
		if (Object.keys(this.screenValue).length > 23) return; //stops the user from typing a number that goes past screen borders
		this.screenValue = this.screenValue.toString() + number.toString();
	}
	chosenOperation(operation) {
		if (operation === '+' || '-' || '*' || '%' || '-' || '/'){ //Changes the operation if a different operation is clicked.
			this.operation = operation;
		}
		if(this.screenValue === '') return
		if(this.savedValue !== ''){
			this.operate();	
		}
		this.savedValue = this.screenValue; //done with the number
		this.screenValue = '';
	}

	add(previous,current){
		if(previous == 9 && current == 10){ //little cringey meme
			return 21; 
		}else{
			return  previous + current;
		}
	}
	minus(previous,current){
		return previous - current;
	}
	multiply(previous,current){
		return  previous * current;
	}
	remainder(previous,current){
		return previous % current;
	}
	devide(previous,current){
		if(previous / current == Infinity){
			return "Lol, no" //snarky answer for division by 0
		}else{
			return previous / current;
		}
	}

	updateScreen() {
		this.screenValueText.innerText = this.screenValue;
		if(this.screenValue == "Downloaded..." || this.screenValue == "Lol, no"){
			this.screenValue = '';
			wholeEquation = '';
		} 
	}

	operate() {
		let equation;
		const previous = parseFloat(this.savedValue);
		const current = parseFloat(this.screenValue);
		if (isNaN(previous) || isNaN(current)) return
		switch (this.operation) {
			case '+':
				equation = this.add(previous,current)
			  	break
			case '-':
				equation = this.minus(previous,current)
			  	break
			case '*':
				equation = this.multiply(previous,current)
			  	break
			case '%':
				equation = this.remainder(previous,current)
		  		break  
			case '/':
				equation = this.devide(previous,current)
				break;
			default:
				return;
		}
		if(equation != "Lol, no"){
			if (Number(equation) === equation && equation % 1 !== 0){ //Displaying the number like a decimal by 6 zeros after the comma when its a decimal or displaying like a int when its an Int.
				this.screenValue = equation.toFixed(6);					
			}else{
				this.screenValue = equation;
			}	
		}else{
			this.screenValue = equation;
		}

		this.operation = undefined;
		this.savedValue = '';
		this.ShowTotalIlyFunction();
		this.wholeEquationFun();
	}	
}  
const calculator = new Calculator(savedValueText,screenValueText);
