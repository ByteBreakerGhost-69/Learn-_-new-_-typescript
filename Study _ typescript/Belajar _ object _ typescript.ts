// object adalah tulang punggung aplikasi.

<!a. basic object
const User = {
    name: "Azhiim",
    isPaid: true
};

// Fungsi yang menerima objek sebagai parameter
function createUser({name: string, isPaid: boolean}) {}

createUser({name: "Azhiim", isPaid: false});


<!b. type aliases ( paling sering di pakai )
type User = {
    name: string;
    email: string;
    isActive: boolean;
};

function createNewUser(user: User): User {
    return { name: "", email: "", isActive: true };
}


<!c. readonly & optional (?)
<! a. readonly: mencegah perubahan nilai.
<! b. ? ( obtional ): membuat properti buleh ada, buleh tidak.

type Admin = {
    readonly _id: string; // Tidak bisa diubah (seperti ID database)
    name: string;
    creditCardDetail?: number; // Tanda tanya berarti ini opsional
};

let myUser: Admin = { _id: "123", name: "H" };
myUser.name = "Hitesh"; // Boleh
// myUser._id = "456"; // Error! Karena readonly.
