
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('surnameOutput').innerText = initPerson.Surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('dayMonthOutput').innerText = initPerson.birthDayMonth;
    document.getElementById('professionOutput').innerText = initPerson.profession;
};