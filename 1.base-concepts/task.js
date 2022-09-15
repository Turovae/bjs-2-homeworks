"use strict";

function solveEquation(a, b, c) {
  let arr = new Array();
  let d = b**2-4*a*c
  console.log(`d=${d}`);
  if ( d < 0 ) {
    arr = [];
  } else if (d === 0) {
    arr[0] = - b / (2 * a);
  } else if (d > 0) {
    arr[0] = (-b+Math.sqrt(d))/(2*a);
    arr[1] = (-b-Math.sqrt(d))/(2*a);
  }
  return arr; // array
}

// console.log(solveEquation(1.25, 5, 5));

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  console.log(`percent = ${percent}`);
  console.log(`contribution = ${contribution}`);
  console.log(`amount = ${amount}`);
  console.log(`date = ${date}`);

  // код для задачи №2 писать здесь
  if (+percent >= 0) {
    percent = +percent / 100;
  } else {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (+contribution >= 0) {
    contribution = +contribution;
  } else {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (+amount >= 0) {
    amount = +amount;
  } else {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  if (date == "Invalid Date") return `Параметр "Срок ипотеки" содержит неправильное значение ${date}`;
  if (date < new Date()) return "Введена прошедшая дата";
  // Проконтролируйте корректность введенных данных.
  // “Параметр <название параметра> содержит неправильное значение <значение параметра>”.

  let currentDate = new Date();
  let n = (date.getFullYear() - currentDate.getFullYear())*12 + date.getMonth() - currentDate.getMonth();
  console.log(`n = ${n}`);

  let s = amount - contribution;
  console.log(`Тело кредита = ${s}`);

  let p = percent / 12;

  let monthlyPay = s * (p + (p / (((1 + p)**n) - 1)));
  console.log(`Ежемесячный платеж: ${monthlyPay}`);

  totalAmount = Math.round(monthlyPay * n * 100)/100;
  
  return totalAmount;
}
