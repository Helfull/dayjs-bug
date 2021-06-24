const assert = require('assert');
const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
const isoWeek = require('dayjs/plugin/isoWeek');

dayjs.extend(customParseFormat);
dayjs.extend(isoWeek);

assert.strictEqual(dayjs('21', 'YY').format('YYYY'), '2021');
assert.strictEqual(dayjs('21', 'YY').isoWeek(22).startOf('isoWeek').format('DD.MM.YYYY'), '31.05.2021');
assert.strictEqual(dayjs('21', 'YY').isoWeek(22).endOf('isoWeek').format('DD.MM.YYYY'), '06.06.2021');
assert.strictEqual(dayjs('21', 'YY').isoWeek(23).startOf('isoWeek').format('DD.MM.YYYY'), '07.06.2021');
assert.strictEqual(dayjs('21', 'YY').isoWeek(23).endOf('isoWeek').format('DD.MM.YYYY'), '13.06.2021');
assert.strictEqual(dayjs('21', 'YY').isoWeek(24).startOf('isoWeek').format('DD.MM.YYYY'), '14.06.2021');
assert.strictEqual(dayjs('21', 'YY').isoWeek(24).endOf('isoWeek').format('DD.MM.YYYY'), '20.06.2021');