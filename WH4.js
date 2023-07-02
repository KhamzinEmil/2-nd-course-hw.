//задание 1
let i = 1;
while (i < 3) {
	console.log('привет!');
	i++;
}
//задание 2
for (let i = 1; i < 6; i++) {
	console.log(i);
}
//задание 3
for (let q = 7; q < 23; q++) {
	console.log(q);
}
//задание 4
const obj = { Коля: 200, Вася: 300, Петя: 400 };

for (const salary in obj) {
	console.log(salary + "-зарплата " + obj[salary] + " долларов");
}
//задание 5
let num = 0;
for (let n = 1000; n > 50; n = n / 2, num++) {
	if (n / 2 > 50) {
		continue;
	}
	console.log(n);
	console.log(num);
}
//задание 6
const first = { Friday: 1 };
for (let p = 1; p < 32; p++) {
	if (p % 7 !== 1) {
		continue;
	}
	console.log("Сегодня пятница, " + p + "-е число. Необходимо подготовить отчет.");

}