let employees = [5, 15, 40, 10];
let salaries = [10_000, 25_000, 50_000, 100_000];
let totalSalary = []; 
let totalTax = 0; 
let averageTax = 0; 

for (i = 0; i < employees.length; i++) {
    for (c = 0; c < employees[i]; c++) {
 totalSalary.push(salaries[i]); 
    }
}

for (i = 0; i < totalSalary.length; i++) {
    totalTax += Math.floor(totalSalary[i] * 0.2); 
}
    averageTax += Math.floor(totalTax / totalSalary.length);

console.log(`Общая сумма налога: ${totalTax} руб.
        Средние налоговые отчисления на человека: ${averageTax} руб.`)

