// const s1 = "Hello";
// console.log(typeof s1); //String - primitive

// const s2 = new String("Hello");
// console.log(typeof s2); //Object
// //Once we run a method on s1 it will turn into object (JS will turn into wrapper class behind the scenes)

/* Object Literals */
const book1 = {
  title: "Book One",
  author: "John Doe",
  year: "2013",
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  }
};

console.log(book1.getSummary());
console.log(Object.keys(book1));
