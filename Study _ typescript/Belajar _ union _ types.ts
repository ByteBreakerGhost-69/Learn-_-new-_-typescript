<! unions memungkinkan sebuah variabel memiliki lebih dari satu jenis type data menggunakkan simbol pipa (|).

<!a. pada variable
let score: number | string = 33;
score = 40;   // Boleh
score = "45"; // Boleh juga


<!b. pada fungsi
function getDbId(id: number | string) {
    if (typeof id === "string") {
        // Di sini TS tahu 'id' adalah string, jadi bisa pakai method string
        id.toLowerCase();
    }
    if (typeof id === "number") {
        // Di sini 'id' pasti angka
        id + 2;
    }
}


<!c. literal types: dapat membatasi variable dengan kata kata tertentu.
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle"; // Boleh
// seatAllotment = "crew"; // Error! Tidak ada di pilihan.
          
