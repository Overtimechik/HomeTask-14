let schet = [
  {
    amount: 421,
    category: "Mitsubishi",
    type: true,
  },
  {
    amount: 790,
    category: "Lexus",
    type: true,
  },
  {
    amount: 195,
    category: "Cadillac",
    type: true,
  },
  {
    amount: 184,
    category: "Buick",
    type: true,
  },
  {
    amount: 868,
    category: "Buick",
    type: false,
  },
  {
    amount: 61,
    category: "Infiniti",
    type: false,
  },
  {
    amount: 975,
    category: "Suzuki",
    type: true,
  },
  {
    amount: 401,
    category: "Mercedes-Benz",
    type: true,
  },
  {
    amount: 250,
    category: "Pontiac",
    type: true,
  },
  {
    amount: 802,
    category: "Toyota",
    type: true,
  },
];
let counter = 0
for(let i = 0;i<schet.length;i++){
  if (schet[i].type){
    counter+=schet[i].amount
  }
}
console.log(counter)
//task 2
/*interface Book {
  title: string;
  author: string;
  year: number;
  genre: string;
}

interface CatalogEntry {
  book: Book;
  quantity: number;
}

// Пример исходного каталога книг
const libraryCatalog: Book[] = [
  { title: "Book 1", author: "Author 1", year: 2000, genre: "Genre 1" },
  { title: "Book 2", author: "Author 2", year: 2005, genre: "Genre 2" },
  { title: "Book 1", author: "Author 1", year: 2000, genre: "Genre 1" },
  { title: "Book 3", author: "Author 3", year: 2010, genre: "Genre 3" },
  { title: "Book 2", author: "Author 2", year: 2005, genre: "Genre 2" }
];

// Создаем новый каталог с учетом количества экземпляров книг
const createCatalog = (catalog: Book[]): CatalogEntry[] => {
  const catalogMap = new Map<string, CatalogEntry>();
  
  // Проходим по каждой книге в исходном каталоге
  catalog.forEach(book => {
      const key = `${book.title}-${book.author}-${book.year}-${book.genre}`;
      
      // Если книга уже есть в каталоге, увеличиваем количество экземпляров
      if (catalogMap.has(key)) {
          const entry = catalogMap.get(key);
          if (entry) {
              entry.quantity++;
              catalogMap.set(key, entry);
          }
      } else {
          catalogMap.set(key, { book, quantity: 1 });
      }
  });
  return Array.from(catalogMap.values());
};
const newCatalog = createCatalog(libraryCatalog);
console.log(newCatalog);*/

//task 4
/*let main = [
  {
    All_good: true,
  },
  {
    All_good: false,
  },
  {
    All_good: false,
  },
  {
    All_good: true,
  },
  {
    All_good: true,
  },
  {
    All_good: true,
  },
  {
    All_good: false,
  },
  {
    All_good: false,
  },
  {
    All_good: false,
  },
  {
    All_good: true,
  },
];
for(let i = 0; i<main.length;i++){
  if(main[i].All_good!){
    console.log("ERROR")
    break
  }
  if(i==main.length){
    console.log("To the next mission")
  }
}
*/
