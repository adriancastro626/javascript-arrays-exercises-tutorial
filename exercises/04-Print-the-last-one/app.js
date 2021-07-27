function generateRandomArray()
{
	var auxArray = [];
	var randomLength = Math.floor(Math.random()*100);
	for(var i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}
var myStupidArray = generateRandomArray();

//Your code here
<<<<<<< HEAD:exercises/04-Print-the-last-one/app.js
var theLastOne = myStupidArray[myStupidArray.length-1];

console.log(theLastOne);
=======


let theLastOne = myStupidArray[myStupidArray.length -1];

console.log(theLastOne);
    
>>>>>>> 11212cfdfd008e36a91d4b802e26c52894d3af9d:exercises/04.1-Print-the-last-one/app.js
