class Book {
    title;
    author;
    alreadyRead;

    constructor(title, author, alreadyRead) {
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }

    bookInfo() {
        if (this.alreadyRead) {
            return `You already read ${this.title} by ${this.author}`;
        }

        return `You still need to read ${this.title} by ${this.author}`; 
    }
}

var books = [
    new Book("Humiliated and Insulted", "Fyodor Dostoevsky", true),
    new Book("Notes From The Underground", "Fyodor Dostoevsky", true),
    new Book("The diary of Anne Frank", "Anne Frank", true),
    new Book("1984", "George Orwell", false),
]

books.forEach(x => console.log(x.bookInfo()));