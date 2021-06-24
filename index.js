const assert = require('assert');
const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
const isoWeek = require('dayjs/plugin/isoWeek');

dayjs.extend(customParseFormat);
dayjs.extend(isoWeek);

const startOfWeek23 = '07.06.2021';
const endOfWeek23 = '13.06.2021';

const year = '21';
const week = 23;

assert.strictEqual(startOfWeek23, dayjs(startOfWeek23, 'DD.MM.YYYY').format('DD.MM.YYYY'));
assert.strictEqual(endOfWeek23, dayjs(endOfWeek23, 'DD.MM.YYYY').format('DD.MM.YYYY'));
assert.strictEqual('2021', dayjs(year, 'YY').format('YYYY'));
assert.strictEqual(startOfWeek23, dayjs(year, 'YY').isoWeek(week).startOf('isoWeek').format('DD.MM.YYYY'));
assert.strictEqual(endOfWeek23, dayjs(year, 'YY').isoWeek(week).endOf('isoWeek').format('DD.MM.YYYY'));