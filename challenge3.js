function netSalaryCalculator(basicSalary, benefits) {
  let paye;
  let nhifDeductions;
  let netSalary;

  //gross salary calculation
  let grossSalary = basicSalary + benefits;

  //Deductable personal relief charge for all job groups
  const personalRelief = 2400;

  //PAYE calculations
  let taxablePay = basicSalary;

  //Calculates respective PAYE deductions per income bracket
  if (taxablePay <= 24000) {
    paye = taxablePay * 0.1;
  } else if (taxablePay > 24000 && taxablePay <= 32333) {
    paye = taxablePay * 0.25;
  } else if (taxablePay >= 32334 && taxablePay <= 500000) {
    paye = taxablePay * 0.3;
  } else if (taxablePay > 500000 && taxablePay <= 800000) {
    paye = taxablePay * 0.325;
  } else {
    paye = taxablePay * 0.35;
  }

  //NHIF calculations
  function calculateNhif(grossSal) {
    //calculates respective amount depending on income bracket
    if (grossSal <= 5999) {
      nhifDeductions = 150;
    } else if (grossSal >= 6000 && grossSal <= 7999) {
      nhifDeductions = 300;
    } else if (grossSal >= 8000 && grossSal <= 11999) {
      nhifDeductions = 400;
    } else if (grossSal >= 12000 && grossSal <= 14999) {
      nhifDeductions = 500;
    } else if (grossSal >= 15000 && grossSal <= 19999) {
      nhifDeductions = 600;
    } else if (grossSal >= 20000 && grossSal <= 24999) {
      nhifDeductions = 750;
    } else if (grossSal >= 25000 && grossSal <= 29999) {
      nhifDeductions = 850;
    } else if (grossSal >= 30000 && grossSal <= 34999) {
      nhifDeductions = 900;
    } else if (grossSal >= 35000 && grossSal <= 39999) {
      nhifDeductions = 950;
    } else if (grossSal >= 40000 && grossSal <= 44999) {
      nhifDeductions = 1000;
    } else if (grossSal >= 45000 && grossSal <= 49999) {
      nhifDeductions = 1100;
    } else if (grossSal >= 50000 && grossSal <= 59999) {
      nhifDeductions = 1200;
    } else if (grossSal >= 60000 && grossSal <= 69999) {
      nhifDeductions = 1300;
    } else if (grossSal >= 70000 && grossSal <= 79999) {
      nhifDeductions = 1400;
    } else if (grossSal >= 80000 && grossSal <= 89999) {
      nhifDeductions = 1500;
    } else if (grossSal >= 90000 && grossSal <= 99999) {
      nhifDeductions = 1600;
    } else if (grossSal >= 100000) {
      nhifDeductions = 1700;
    }

    return nhifDeductions;
  }

  //NSSF calculations
  function nssfDeductions() {
    return 0.06 * taxablePay;
  }

  //Net salary calculation
  netSalary =
    grossSalary -
    paye -
    calculateNhif(grossSalary) -
    nssfDeductions() -
    personalRelief;

  //Display gross salary plus implemented deductions
  console.log(`Gross Salary: Kes ${grossSalary}`);
  console.log(`PAYE Deduction: Kes ${paye} `);
  console.log(`NHIF Deduction: Kes ${calculateNhif(grossSalary)}`);
  console.log(`NSSF Deduction: Kes ${nssfDeductions()}`);

  //Main task for the program
  return `Net salary: Kes ${netSalary}`;
}

//console.log(netSalaryCalculator(100000, 3000));
