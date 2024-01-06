// 1. Nupieškite kvadratą iš “*”, kurio kraštines sudaro n=10 “*” simbolių. Pasinaudokite ciklais. Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis.

let n = 10;

for (let i = 0; i  <  n; i++)//formuoja eilutes
{
    for(let ii =  0; ii < n; ii++){ //formuoja stullpelius
        document.write('<span>*</span>')
    }
    document.write('<br>')
}

// 2.  Prieš tai nupieštam kvadratui nupieškite raudonas istrižaines.

document.write('<br>')
document.write('<br>')

document.write("<div>")
for (i=0; i < n; i++ ){
    document.write(i)
}
document.write("<div>")
for (let i = 0; i  <  n; i++)
{
    document.write(i)
    for(let ii =  0; ii < n; ii++){
        if (i === ii || i + ii + 1 === n){
            document.write('<span style=\"color: red\">*</span>')
        }
        else{
            document.write('<span>*</span>')
        }
    }
    document.write('<br>')
}