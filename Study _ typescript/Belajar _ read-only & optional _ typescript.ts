<! read-only ( hanya baca )
//gunakkan r3adonly di depan nama properti, agar nilainya tidak dapat di ubah setelah object di buat.

interface Admin {
    readonly dbId: number, // Tidak boleh diubah!
    email: string
}

const myAdmin: Admin = { dbId: 101, email: "admin@web3.com" }
myAdmin.email = "new@web3.com" // Boleh
// myAdmin.dbId = 202 // ERROR: Cannot assign to 'dbId' because it is a read-only property.


<! optional properties (?)
properti buleh ada buleh tudak.

interface CameraConfig {
    resolution: string,
    fps: number,
    nightMode?: boolean // Boleh diisi, boleh dikosongkan
}

const simpleCam: CameraConfig = { resolution: "1080p", fps: 60 } // Aman!



<! inherentance
// interface dapat mewarisi nilai dari interface menggunakkan katakunci extends.
interface Person {
    name: string
}

interface Developer extends Person {
    role: "Frontend" | "Backend" | "Fullstack",
    languages: string[]
}

const me: Developer = {
    name: "Azhiim",
    role: "Fullstack",
    languages: ["Solidity", "TypeScript"]
  }
  
