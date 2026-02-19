// #5

// break
// continue

for(n = 0; n <= 20; n+=3)       
{
    if(n === 12)
        break;

    console.log(n)
}

console.log("********************************************************************")

for(m = 0; m <= 20; m+=3)       
{
    if(m === 3 || m === 9 || m === 15)
        continue;

    console.log(m)
}

console.log("********************************************************************")

for(i = 1; i <= 3; i++) {
    for(j = 1; j <= 3; j++) {
        if(i === j) {
            console.log("here i and j are equal, so will not print the values and skip to the next iteration");
            continue;
        }
        console.log(i, j);
    }
}
