
function table(){
    let num = parseInt(document.getElementById("tb1").value);
    console.log(`Table of ${num} is: `);
     
    for(let i=1;i<=10;i++)
    {
        console.log(i*num);
        document.getElementById("p1").innerHTML += ` ${i*num} `
    }
    
    
}