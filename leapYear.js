let year = 2020;
if (year %4 == 0 && year%100 !=0 || year%400 == 0) {
    console.log("Leap Year :" + year);
}
else{
    console.log("Not Lear Year :" + year);
}