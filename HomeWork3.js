//We completed this homework during the class time with a group
//Exercise
let grade = 80;

if (grade >= 80){
    console.log("You did a good job")
}
else if (grade >= 70 && grade <80){
    console.log("Keep trying")
}
else if (grade >= 60 && grade <70){
    console.log("ehh")
}
else if (grade >= 55 && grade < 60){
    console.log("not to good")
}
else {
    console.log("Bad grade but you"ll get next time)
}


// Exercise 1

for ( let i = 0; i <= 10; i ++){
    if ( i % 2 === 0){
        console.log(i)
    }
}

// Exercise 2

let grade = 80;

if ( grade >= 80){
    console.log("You did a good job")
}
else if ( grade >= 70 && grade < 80)
{
    console.log("Keep trying")
}
else if( grade >= 60 && grade < 70)
{
    console.log("ehhhh")
}
else if( grade >= 55 && grade < 60)
{
    console.log("Not to good")
}
else 
{
    console.log("Bad Grade But You'll Get Em Next Time")
}


for (let i = 10; i <= 90; i += 20){
    console.log(i)

    // for(let j = 20; j <= 100; j += 20){
    //     console.log(j)
    // }
    if (i === 90){
        for(let j = 20; j <= 100; j += 20){
            console.log(j) }
        }
}

// Exercise 3
for (let i = 1; i <= 100; i++){
    if (i % 15 === 0){
        console.log('FizzBuzz')
    }
    
    else if (i % 3 === 0){
        console.log('Fizz')
    }

    else if (i % 5 === 0){
        console.log('Buzz')
    }
    else{
        console.log(i)
    }
}







