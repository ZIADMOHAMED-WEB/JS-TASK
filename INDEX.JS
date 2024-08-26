let Score = prompt("Please enter your score:");

Score = Number(examScore);

if(Score<100 && Score>= 85  ) {
    console.log(" you got A")

} else if ( Score<85 && Score>= 75 ) {

    console.log(" you got B")
} else if ( Score<75 && Score>= 65 ) {

    console.log(" you got C")

} else if ( Score<65 && Score>= 50 ) {

    console.log(" you got D")

}  else if ( Score<50 && Score>= 0 ) {

    console.log(" you got F")

}   else if ( Score == 100 ) {

    console.log(" ASHTR WAHED Y3M")
}  else {
    console.log(" NOT A NUMBER")
}

