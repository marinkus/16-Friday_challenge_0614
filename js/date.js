function currentDate() {
    let kalendorius = new Date();
    let weekDay = kalendorius.getDay();
    let month = kalendorius.getMonth();
    let day = kalendorius.getDate()
    let year = kalendorius.getFullYear();

    switch(weekDay) {
        case 1:
            weekDay = 'Pirmadienis';
            break;
        case 2:
            weekDay = 'Antradienis';
            break;
        case 3:
            weekDay = 'Trečiadienis';
            break;
        case 4:
            weekDay = 'Ketvirtadienis';
            break;
        case 5:
            weekDay = 'Penktadienis';
            break;
            break;
            break;
        case 6:
            weekDay = 'Šeštadienis';
            break;
        case 7:
            weekDay = 'Sekmadienis';
            break;
    };

    switch(month + 1) {
        case 1:
            month = 'Sausis';
            break;
        case 2:
            month = 'Vasaris';
            break;
        case 3:
            month = 'Kovas';
            break;
        case 4:
            month = 'Balandis';
            break;
        case 5:
            month = 'Gegužė';
            break;
        case 6:
            month = 'Birželis';
            break;
        case 7:
            month = 'Liepa';
            break;
        case 8:
            month = 'Rugpjūtis';
            break;
        case 9:
            month = 'Rugsėjis';
            break;
        case 10:
            month = 'Spalis';
            break;
        case 11:
            month = 'Lapkritis';
            break;
        case 12:
            month = 'Gruodis';
            break;
    };

    const date = ` ${weekDay}, ${month} ${day}, ${year}`;
    document.getElementById('date').innerText = date;
};

currentDate();