const box = document.querySelectorAll('.box');
const x = (item) => item.classList.toggle("x");
const o = (item) => item.classList.toggle("o");


const space = (item) => {
	if (item.classList.contains('x' || 'o'))
{return true} 
	else 
{return false}}

let turn = true

const change = (item) => {if (space(item) === false){
	turn = !turn; return turn
}

}

box.forEach(item => 
	{item.addEventListener('click', event => {
		const spc = space(item)
		const turner = change(item)
		if (spc === false && turner === false){
			x(item)
		} else if (spc === false && turner === true){
			o(item)
		} else {return null}
	})
});

