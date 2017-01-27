const list = Array(10).fill().map((_,i) => {return i });
console.log(list);
list.sort(()=>Math.random()>0.5);
console.log(list);
let result = quickSort(list);
console.log(result);

function random(list) {
	let index = Math.round( list.length*Math.random() );
	return list[index];
}

function quickSort(list) {
	if ( list.length < 2 ) {
		return list ;
	}
	let pri = random(list);
	let smaller = list.filter((i) => { return i < pri });
	let greater = list.filter((i) => { return i > pri } );
	return [...(quickSort(smaller)),pri,...(quickSort(greater))];
}
