function BMI() {
    var cm = Number(document.getElementById('cm').value) / 100; 
    var kg = Number(document.getElementById('kg').value);
    var bmi = kg / (cm * cm);

    alert('あなたのBMIは ' + bmi + ' です。');
}

