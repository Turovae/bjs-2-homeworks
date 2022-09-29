"use strict"

// Задача 1
function parseCount(str) {
    let count = Number.parseInt(str);

    if (isNaN(count)) {
        throw new Error('Невалидное значение');
    } else {
        return count;
    }
}

function validateCount(str) {
    try {
        return parseCount(str);
    } catch(err) {
        return err;
    }
}

// Задача 2
class Triangle {
    constructor (a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = (this.a + this.b + this.c) / 2;
        const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

        return Math.round(s * 1000) / 1000;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        const msg = "Ошибка! Треугольник не существует";
        return {
            getArea() {
                return msg;
            },
            getPerimeter() {
                return msg;
            }
        }
    }
}