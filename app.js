const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 8
            break;
        case 'tuesday':
            return 7
            break;
        case 'wednessday':
            return 2
            break;
        case 'thursday':
            return 6
            break;
        case 'friday':
            return 4
            break;
        case 'saturday':
            return 7
            break;
        case 'sunday':
            return 7
            break;
        default:
            return 'error'

    }
};
const getActualSleepHours = () =>
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');
console.log(getSleepHours('monday'));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours =
        getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('You have got the perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('you have got more than needed');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You should get some rest.');
    } else {
        console.log('error! something went wrong, check your code.');
    }
};

calculateSleepDebt();