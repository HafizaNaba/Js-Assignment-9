var arr = [ []  ,[]  ,[],[]];

//matrix
var matrix = [ 
    [0,1,2,3] , 
    [1,0,1,2] , 
    [2,1,0,1]
 ];
document.write(matrix[0] + "<br>" + matrix[1] + "<br>" + matrix[2]  + "<br>" );


//counting 1 to 10
for(var i = 0; i<=10; i++){
    document.write(i + "<br>")
}


//table
var num = +prompt("Enter a number to show its multiplication table");
var length = +prompt("Enter Length multiplication table");


document.write("<b>Multiplication Table is</b>" + num + "<br>" + "<b>And its Length is </b>" + length + "<br>");

for(var i = 1; i <= length; i++){
    document.write(num + " x " + " "  + i + " =  " + ( num * i )+ "<br>")
}

//fruits from array
var fruits = ["Apple" , "banana" ,"Orange" , "Mango" , "Strawberry"];
document.write("<b>Fruits</b>" + "<br>");


for(var i = 0; i < fruits.length; i++){
    document.write(fruits[i] + "<br>")
}
document.write("Element at index " + i+ " is Apple"+ "<br>");
document.write("Element at index " +i + " is Banana"+ "<br>");
document.write("Element at index " + i + " is Orange"+ "<br>");
document.write("Element at index " + i+ " is Mango"+ "<br>");
document.write("Element at index " + i + " is Strawberry"+ "<br>");


//Counting, Reverse counting, Even, Odd, Series
document.write("<h1>Counting</h1>" + "<br>");
for(var i = 1; i <= 15; i++){
    document.write(i+ "," )
  
}

document.write("<br>")

document.write( "<br>" + "<h1>Reverse Counting</h1>" + "<br>");
for(var i = 10; i >= 1; i--){
    document.write(i + "," )

}
document.write("<br>")

document.write("<h1>Even : </h1>");
for(var i = 0; i<=20 ; i= i+2){
    document.write(i + ",")
}
document.write("<br>")

document.write("<h1>ODD : </h1>");
for(var i = 1; i<20 ; i= i+2){
    document.write(i + ",")
}

document.write("<br>");
document.write("<h1>Series : </h1>");
for(var i = 2; i<20; i = i+2){
    document.write(i +" K " + "," )
}


//bakery item user input
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var bakery = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
bakery = bakery.toLowerCase();
if(bakery === A[0]){
    document.write("<br>"+ "Cake is available at index " + A.indexOf(bakery)+ "  in our Bakery")
}else if(bakery === A[1]){
    document.write("<br>"+ "Apple pie is available at index " + A.indexOf(bakery)+ " in our Bakery")
}else if(bakery === A[2]){
    document.write("<br>"+ "Cookie is available at index " + A.indexOf(bakery)+ " in our Bakery")
}else if(bakery === A[3]){
    document.write("<br>"+ "Chips is available at index " + A.indexOf(bakery)+ " in our Bakery")
}else if(bakery === A[4]){
    document.write("<br>"+ "Patties is available at index " + A.indexOf(bakery)+  " in our Bakery")
}else{
    document.write("<br>"+ "We are sorry, " + bakery + " is not available in our Bakery")
}
document.write("<br>")

//largest number

var arr = [24, 53, 78, 91, 12];

var largest = arr[0];

for(var i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}
document.write("<br>" + "The largest number is " + largest);

//Small number
var number = [24, 53, 78, 91, 12];
var small = number[0];
for(var i = 1; i<number.length; i++){
    if(number[i] < small){
        small = number[i];
    }
}
document.write("<br>" + "The smallest number is " + small);

// Write a program to print multiples of 5 ranging 1 to 100.
for(var i =0; i<= 100; i++){
    if(i % 5 === 0){
        document.write( "<br> " + i + ",")
    }
}