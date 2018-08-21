function ageCalculator(name, yearOfBirth, currentYear) {
    age = currentYear - yearOfBirth;
    return name + " is " + age + " years old."
}

console.log(ageCalculator('Erik', 1989, 2018));
