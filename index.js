// Code your solutions in this file
/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
} 

for (let i=0; i<=2; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
      }*/ 


/*
      const gifts = ["teddy bear", "drone", "doll"];

      function wrapGifts(gifts) {
        for (let i = 0; i < gifts.length; i++) {
          console.log(`Wrapped ${gifts[i]} and added a bow!`);
          debugger;
        }
      
        return gifts;
      }
      
      wrapGifts(gifts); 





      for (let age = 30; age < 40; age++) {
        console.log(`I'm ${age} years old. Happy birthday to me!`);
      } */


const names = ["Lisa", "Kaitlin", "Jan"];
let message = 'surprise';

function writeCards(names, message){

let writeCardsArr = [];
for (let i=0; i < names.length; i++){
 writeCardsArr.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
}
return writeCardsArr;
}


function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number-=1
    }
}

console.log(countDown(100));
