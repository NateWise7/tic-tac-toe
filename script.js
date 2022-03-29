const box = document.querySelectorAll('.box');
const reset = document.querySelectorAll('.btn');
const overlay = document.querySelectorAll('#overlay')[0];
const lines = document.querySelectorAll('.lines');

const x = (item) => item.classList.toggle("x");
const o = (item) => item.classList.toggle("o");



const space = (item) => {
	if (item.classList.contains('x')||
		item.classList.contains('o'))
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

box.forEach(item => {
	item.addEventListener('click', event => {
		winCondition()
	})
})

const resetfunc = (item) => 
{item.forEach(item => {
	const spc = space(item)
	if (spc === true){

		removeX(item)
	}
})}

const removeX = (item) => { 
	if (item.classList.contains('x')) 
	{x(item)}
	else {removeO(item)}
}

const removeO = (item) => { 
	if (item.classList.contains('o')) 
	{o(item)} 
	else {return null}
}

const resetfunc1 = (para) => {
	if (overlay.classList.contains(para) === true){
		toggles(overlay, para)
	} else {undefined}
}

const liness = (para) => {
	for(var i=0; i<3; i++) {
		if (lines[i].classList.contains(para)) {
			toggles(lines[i], para)
		}
	}
}

reset[0].addEventListener('click', event => {
	resetfunc(box);
	liness('winingLineVert');
	liness('winingLineHor');
	liness('winingLineDiag2');
	liness('winingLineDiag1');
	resetfunc1('HW500');
	resetfunc1('rows');
	resetfunc1('columns');
	resetfunc1('vert');
})

const toggles = (item, styles) => {
	item.classList.toggle(styles)
}

const checkingClassList = (item, para) => {
	if (item.classlist.contains(para)) {
		return true 
	} else {
		return false
	}
}
const winings = [
	[0,1,2],
	[0,3,6],
	[0,4,8],
	[1,4,7],
	[2,4,6],
	[3,4,5],
	[2,5,8],
	[6,7,8],
]

const checking = (para, para2) => {
	let para1 = para;
	if (box[winings[para][0]].classList.contains(para2) === true &&
		box[winings[para][1]].classList.contains(para2) === true &&
		box[winings[para][2]].classList.contains(para2) === true)
	{
		return para1
	} else {
		return undefined
	}
}

const winCondition = () => {
	for (let i = 0; i < 9; i++) {
		let check1 = checking(i, 'x');
		let check2 = checking(i, 'o');
		if (check1 != undefined) {xwining(check1)}
		 else if (check2 != undefined){xwining(check2)}
		 else undefined
}
}

const overlaying = (para) => {
	toggles(overlay, 'HW500');
	if (para === 1) {
		toggles(overlay, 'rows')
	} else if (para === 2) {
		toggles(overlay, 'columns')
	} else if (para === 3) {
		toggles(overlay, 'vert')
	}
}

const xwining = (para) => {
	let liin1 = lines[0];
	let liin2 = lines[1];
	let liin3 = lines[2];
		if (para === 0)	{
			overlaying(1);
			toggles(liin1, 'winingLineHor')
		} else if (para === 1) {
			overlaying(2);
			toggles(liin1, 'winingLineVert')
		} else if (para === 2) {
			overlaying(3);
			toggles(liin1, 'winingLineDiag1')
		} else if (para === 3) {
			overlaying(2);
			toggles(liin2, 'winingLineVert')
		} else if (para === 4) {
			overlaying(3);
			toggles(liin1, 'winingLineDiag2')
		} else if (para === 5) {
			overlaying(1);
			toggles(liin2, "winingLineHor")
		} else if (para === 6) {
			overlaying(2);
			toggles(liin3, 'winingLineVert')
		} else if (para === 7) {
			overlaying(1);
			toggles(liin3, 'winingLineHor')
		} else console.log('how did this even happen')
}
