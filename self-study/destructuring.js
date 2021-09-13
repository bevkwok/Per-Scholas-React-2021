// Adam's example

const props = { color: 'red', taste: 'sweet', name: 'apple'}

console.log(props.name); // apple
console.log(props['color']); // red

const theKey = 'taste'; 
console.log(props[theKey]); // sweet

const {color, taste, name} = props;

