// 1. a, b və c ədədlərimiz var. ax^2+bx+c=0 kvadrat tənliyinin həllini tapıb konsolda çap edin.

// let a = 4;
// let b = 7;
// let c = 3;

// d = b*b - 4*a*c;

// let xFirst = (-b + Math.sqrt(d)) / (2 * a);
// let xSecond = (-b - Math.sqrt(d)) / (2 * a);


// console.log(xFirst);
// console.log(xSecond);





// 2. a ədədimiz var. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.


// let bolunen = [ ];

// let a = 5;

// for (let i = 0; i < 1000; i++) {
//     if(i%a == 0){
//         bolunen.push(i);
//     }

// }

// console.log(bolunen);







// 3-7 saylı tapşırıqlar bu array üzərindən işləniləcək:
// const arr = [2, 4, 5, 9, 1];



// 3. Bu massivin minimum elementini tapın:


// let first = arr[0];

// for (let i = 0; i < arr.length; i++){
//     if(arr[i] < first){
//         first = arr[i];
//     }
// }

// console.log(first);





// 4. Bu massivin maksimum elementini tapın


// let first = arr[0];

// for (let i = 0; i < arr.length; i++){
//     if(arr[i] > first){
//         first = arr[i];
//     }
// }

// console.log(first);


// 5. Bu massivin minimum elementinin indeksini tapın.

// let first = arr[0];

// for (let i = 0; i < arr.length; i++){
//     if(arr[i] < first){
//         first = arr[i];
//     }
// }


// let x = arr.indexOf(first);
// console.log(x);




// 6. Bu massivin maksimum elementinin indeksini tapın.

// let first = arr[0];

// for (let i = 0; i < arr.length; i++){
//     if(arr[i] > first){
//         first = arr[i];
//     }
// }

// let x = arr.indexOf(first);
// console.log(x);



// 7. Tək indeksli massiv elementlərinin cəmini hesablayın

// let cem = 0;

// for(let i=1; i < arr.length; i+=2){
//     cem += arr[i];
// }

// console.log(cem);







// 8. Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin.


// let x  = "Mən Code Academy Tələbəsiyəm";
// let y = x.toLocaleLowerCase();
// console.log(y);


// 9. Mətndə başlanğıc və son boşluqları təmizləyin: "            Mən Code Academydə Programing tədrisi alıram            "


// let x = "            Mən Code Academydə Programing tədrisi alıram            ";
// let y = x.trim()

// console.log(y);



// 10. Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın

// let x = "Mən Code Academy Tələbəsiyəm";
// let y = x.split(" ");
// console.log(y);



// 11.  "            Mən Code Academydə Programing tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.

// let x = "            Mən Code Academydə Programing tədrisi alıram            ";
// let y = x.trim()
// let z = y.replaceAll(" ","");
// let say = z.length;
// console.log(say);