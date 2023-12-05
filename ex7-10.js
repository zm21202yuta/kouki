function BMI2() {
    var cm2 = Number(document.getElementById('cm2').value) / 100; 
    var kg2 = Number(document.getElementById('kg2').value);
    var bmi2 = kg2 / (cm2 * cm2); 

    var bunrui;
    if (bmi2 < 18.5) {
        bunrui = '低体重';
    } else if (bmi2 < 25) {
        bunrui = '普通';
    } else {
        bunrui = '肥満';
    }

    alert('あなたのBMIは ' + bmi2 + ' です。この数値は「' + bunrui + '」の範囲に分類されます。');
}
