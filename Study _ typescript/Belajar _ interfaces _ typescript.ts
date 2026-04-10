<! interfaces memberi tahu typescript " kamu harus mempunyai properti X, Y, Z"

interface User {
    email: string,
    userId: number,
    googleId?: string, // Properti opsional
    startTrial(): string // Method yang harus mengembalikan string
}

const azhiim: User = { 
    email: "a@z.com", 
    userId: 2211,
    startTrial: () => {
        return "Trial started"
    }
}


interfaces memiliki kelebihan bernama " re-opening" kamu bisa menambah properti ke interfaces yamg sudah ada tanpa mengubah code lama.

// Interface awal
interface User {
    name: string
}

// Re-opening: menambah properti baru
interface User {
    githubToken: string
}

// Sekarang 'User' harus punya 'name' DAN 'githubToken'
  
