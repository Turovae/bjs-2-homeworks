'use strict';
// Задача 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
       this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state *= 1.5;
        if (this.state > 100) {
            this.state = 100;
        }
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(...args) {
        super(...args);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = 'detective'; 
    }
}

// Задача 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book && book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const book = this.books.find(item => {
            return item[type] === value;
        });
        return book || null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(item => {
            return item.name === bookName;
        });
        if (bookIndex < 0) {
            return null;
        }
        return this.books.splice(bookIndex, 1)[0];
    }
}

// Задача 3
class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.subjects = {};
    }

    addMark(mark, subject) {
        if (mark < 0 || mark > 5) {
            console.log('Ошибка, оценка должна быть числом от 1 до 5');
            return;
        }
        if (!this.subjects[subject]) {
            this.subjects[subject] = {
                marks: []
            }
        }

        this.subjects[subject].marks.push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.subjects[subject]) {
            return "Несуществующий предмет";
        }
        const marks = this.subjects[subject].marks
        const average = marks.reduce((accum, mark) => accum + mark, 0) / marks.length;
        return average;
    }

    getAverage() {
        let div = 0;
        let sum = 0;
        for (let subject in this.subjects) {
            sum += this.getAverageBySubject(subject);
            div++;
        }

        if (div === 0) {
            return 'Оценок нет';
        }

        return sum / div;
    }

    exclude(reason) {
        delete this.subjects;
        this.excluded = reason;
    }
}
