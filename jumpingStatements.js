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
