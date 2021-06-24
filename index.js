const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
const isoWeek = require('dayjs/plugin/isoWeek');

dayjs.extend(customParseFormat);
dayjs.extend(isoWeek);

const date = '07.06.2021';

const year = '21';
const week = 23;

console.log(dayjs(date).format('DD.MM.YYYY'));
console.log(dayjs(year, 'YY').format('DD.MM.YYYY'));
console.log(dayjs(year, 'YY').isoWeek(week).format('DD.MM.YYYY'));