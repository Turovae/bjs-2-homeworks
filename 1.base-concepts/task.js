"use strict";

function solveEquation(a, b, c) {
  const d = b**2-4*a*c;
  if (d < 0) {
    return [];
  }
  if ( d === 0 ) {
    return [ - b / (2 * a) ];
  }
  const x1 = (-b+Math.sqrt(d))/(2*a);
  const x2 = (-b-Math.sqrt(d))/(2*a);
  return [x1, x2];
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  console.log(`percent = ${percent}`);
  console.log(`contribution = ${contribution}`);
  console.log(`amount = ${amount}`);
  console.log(`date = ${date}`);

  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  if (date == "Invalid Date") return `Параметр "Срок ипотеки" содержит неправильное значение ${date}`;
  if (date < new Date()) return "Введена прошедшая дата";

  let currentDate = new Date();
  let n = (date.getFullYear() - currentDate.getFullYear())*12 + date.getMonth() - currentDate.getMonth();
  console.log(`n = ${n}`);

  let s = amount - contribution;
  console.log(`Тело кредита = ${s}`);

  let p = percent / 12;

  let monthlyPay = s * (p + (p / (((1 + p)**n) - 1)));
  console.log(`Ежемесячный платеж: ${monthlyPay}`);

  return Math.round(monthlyPay * n * 100)/100;
}
