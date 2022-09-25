function Student(name, gender, age) {
    // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов

Student.prototype.addMark = function (mark) {
  if (!this.marks) {
    this.marks = [];
  }
  this.marks.push(mark);
}

Student.prototype.addMarks = function (...arg) {
  if (!this.marks) {
    this.marks = [];
  }
  this.marks.push(...arg);
}

Student.prototype.getAverage = function() {
  return this.marks.reduce((accum, elem) => accum + elem, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}
