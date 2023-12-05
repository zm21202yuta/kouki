function BMI() {
    var height = Number(document.getElementById('height').value) / 100; 
    var weight = Number(document.getElementById('weight').value);
    var bmi = weight / (height * height);

    alert('あなたのBMIは ' + bmi + ' です。');
}

