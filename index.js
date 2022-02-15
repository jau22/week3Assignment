//1a
let ages = [3, 9, 23 , 64, 2, 8, 29, 93];
/*ages.length would return the the number of ages (ex. 8)
To get the last index (ex. last index is 7), we would need to subtracted from that amount. */
console.log(ages[(ages.length - 1)] - ages[0]);

//1b
ages.push(28);
console.log(ages[(ages.length - 1)] - ages[0]);

//1c
/* i is declared as an independent value, initially as the same as the number of ages listed
i will be used to countdown to 0, while it is also used to handle the index
example: 
first loop, i is 9, and by subtracting 1, it will return the last number on the list, then i--.
second loop, i is 8, and by subtracting 1, it will return the second to last number, then i--...etc.
*/
let i = ages.length;
let totalAge = 0;
let averageAge;
while (i > 0){
        totalAge += ages[(i - 1)];
        i--;
    } 

console.log("There is "+ i + " more ages to be added, the total is " + totalAge);  
averageAge = totalAge/ages.length;
console.log( "Average age is " +averageAge);

//2a
/* i2 is declared as an independent value, initially as the same as the number of names listed
i2 will be used to countdown to 0, as well as handling index.
names[].length return number of characters in the string.
*/
let names = ['Sam' , 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let i2 = names.length;

let totalCharacter = 0;
let averageCharacter;
while (i2 > 0){
    totalCharacter += names[(i2 - 1)].length;
    i2--;
}

console.log("There is "+ i2 + " more names to be added, the total is " + totalCharacter)
averageCharacter = totalCharacter/names.length;
console.log("Average number of characters from all the names is " +averageCharacter);

//2b
/* i2b is declared as an independent value, initially as the same as the number of names listed
i2b will be used as a controlled value for timesLooped. timesLooped will be used as an index for the array.
This is a different approach from the previous one.
*/
let i2b = names.length;
let timesLooped = 0;
let namesTogether = "";
while (timesLooped < i2b){
    namesTogether += names[timesLooped] + " ";
    timesLooped++;
}

console.log("All names are added together. " + namesTogether)

//3,4
console.log("names[(names.length-1)] gives me the last array: " + names[(names.length-1)]);
console.log("names[0] gives me the first array: " + names[0]);

//5
//map duplicates the array and makes adjustment to the duplication.
let nameLength = names.map(x => x.length);
console.log(nameLength);

//6 uses the same logic as task 1 and 2.
let i6 = nameLength.length;
let nameLengthTotal = 0;
while (i6 > 0){
    nameLengthTotal += nameLength[(i6-1)];
    i6--;
    console.log("There is currently " + nameLengthTotal + " characters. And there is " + i6 + " names left.");
}

//7 the first needs to be added n number of times.
let result7 = "";
function wordMultiplier(word,n){while(n>0){
    result7 += word; n--
    }
    return result7;
}

console.log(wordMultiplier("Hello",3));

//8 trying to delcare a simpler function the shorter way 
const fullName = (firstName,lastName) => firstName + " " + lastName;
console.log(fullName("Tony","Stark"));

//9 same loop array sum logic as the previous tasks, 
//where amount of times looped and the index of the array is dependent of the amount of items in the array.

let array9 = [199,1];

function sumArray (arrayList){
    
    let i9 = arrayList.length; 
    let total9 = 0;
    while(i9 > 0){
    total9 += arrayList[i9-1];
    i9--; 
    }  if (total9 > 100){return true;} else{
    return false;
}
}

console.log(sumArray(array9));

 //10 same as above.

 function avgArray (arrayList){
     let i10 = arrayList.length;
     let total10 = 0;
     while (i10 > 0){
         total10 += arrayList[i10-1];
         i10--;
     }
     return total10 / arrayList.length
 }
 console.log(avgArray(ages));

 //11
 //i11a is arrayOne's number of arrays, as to i11b to arrayTwo's
 //total11a is going to be declared as the sum of arrayOne; as to total11b to arrayTwo's 
 function avgCompare (arrayOne, arrayTwo){
    let i11a = arrayOne.length;
    let i11b = arrayTwo.length;
    let total11a = 0;
    let total11b = 0;
//The two sets of Sum are calculated separately in their own loop.
    while (i11a > 0){
        total11a += arrayOne[i11a-1];
        i11a--;
    }
    while (i11b > 0){
        total11b += arrayTwo[i11b-1];
        i11b--;
    }
//avg is calculated.
    let avg11a = total11a/arrayOne.length;
    let avg11b = total11b/arrayTwo.length;

    if (avg11a > avg11b){
        return true;
    }else {return false;}
}

console.log(avgCompare(array9, ages));

//12
function willBuyDrink(isHotOutside,moneyInPocket){
    if(isHotOutside == true && moneyInPocket > 10.50){
        return true;
    } else {
        return false;
    }
}

console.log(willBuyDrink(true,20));

/**13 Phone Wallet Keys.
 This is a function that addresses a scenario when I leave the house without one or more of these essentials**/
function leavingHome(havePhone,haveWallet,haveKeys){
    if (havePhone == true && haveWallet == true && haveKeys == true){
        return "It is going to be a good day."
    } else if(havePhone != true && haveWallet != true && haveKeys != true){
        return "Time to crash my friend's place."
    } else if(haveKeys == true && (havePhone != true || haveWallet != true)){
        return "Ugh, I need to go back in."
    } else {
        return "Can't always have everything."
    }
}

console.log(leavingHome(true,false,false));