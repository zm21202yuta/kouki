function determineLeapYear() {
    var year = Number(document.getElementById('year').value);
    var answer711;

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        answer711 = '閏年';
    } else {
        answer711 = '平年';
    }

    // 結果
    document.getElementById('answer7112').innerText = '西暦' + year + '年は' + answer711 + 'です。';

    // 結果をalertで表示
    alert('西暦' + year + '年は' + answer711 + 'です。');
}
