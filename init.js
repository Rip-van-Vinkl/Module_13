window.onload = function() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('surnameOutput').innerText = initPerson.Surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('dayMonthOutput').innerText = initPerson.birthDayMonth;
    document.getElementById('professionOutput').innerText = initPerson.profession;
};
  
  document.querySelector('#start').onclick = function() {
    window.onload ();
  }


  document.querySelector('#clear').onclick = function() {
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('middleNameOutput').innerText = "";
    document.getElementById('surnameOutput').innerText = "";
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('birthYearOutput').innerText = "";
    document.getElementById('dayMonthOutput').innerText = "";
    document.getElementById('professionOutput').innerText = "";

  }
