function* numberGen(){
    let i=0
    yield 5;
    yield 3;
    yield 8;
    yield 9;
}
const gen =numberGen()
// let l=yield.length
console.log(l)
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());