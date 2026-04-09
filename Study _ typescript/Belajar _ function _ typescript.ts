<!a. menentukan type parameter
// jila tidak memberilan type parameter maka typescript akan menganggapnya any, dan itu berbahaya.
<! contoh:
function tambahDua(num: number) {
    return num + 2;
}

tambahDua(5); // Aman
// tambahDua("5"); // Error! TS tahu ini bukan angka.


<!b. menentukan return type
// ini sangat pentong untuk memastikan fungsimu mengembalikan apa yang kamu harapkan.
<! contoh:
function salam(nama: string): string {
    return `Halo, ${nama}!`;
    // return 10; // Error! Karena kamu menjanjikan string (: string)
}


<!c. void & never
<! a. void: // di gunakkan saat fungsi tidak mengembalikan apa apa.
<! b. never;// di gunakkan untuk funhsi yang tidak pernah selesai atau sengaja melempar eror.
  
