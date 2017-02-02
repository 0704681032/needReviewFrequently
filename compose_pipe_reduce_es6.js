function compose(...fns) {
	return x  => fns.reduceRight( (s,f) => f(s),x);
}

function pipe(...fns) {
	return x  => fns.reduce( (s,f) => f(s),x);
}

function toLower(s) {
	return s.toLowerCase();
}

function double(s) {
	return s + s;
}

function sub(s) {
	return s.substr(1);
}

let piped = pipe(double,sub);

let composed = compose(double,sub);

console.log(piped('SabCdD'));

console.log(composed('SabCdD'));

//console.log(sub('SabCdD'));
