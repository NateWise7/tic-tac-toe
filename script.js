const box = document.querySelectorAll('.box');
const x = (item) => item.classList.toggle("x");
const o = (item) => item.classList.toggle("o");


const space = (item) => {
	if (item.classList.contains('x' || 'o'))
{return true} 
	else 
{return false}}

box.forEach(item => 
	{item.addEventListener('click', event => {
		const spc = space(item)
		let turn = false
		if (spc === false && turn === false){
			turn = !turn && x(item)
		} else if (spc === false && turn === true){
			turn = !turn && o(item)
		} else {return null}
	})
});

