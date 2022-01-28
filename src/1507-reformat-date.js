/**
 * @param {string} date
 * @return {string}
 */
const reformatDate = (date) => {
  const monthMap = new Map([
    ['Jan', '01'],
    ['Feb', '02'],
    ['Mar', '03'],
    ['Apr', '04'],
    ['May', '05'],
    ['Jun', '06'],
    ['Jul', '07'],
    ['Aug', '08'],
    ['Sep', '09'],
    ['Oct', '10'],
    ['Nov', '11'],
    ['Dec', '12'],
  ]);

  let i = 0;

  let day = '';
  while (date[i] >= '0' && date[i] <= '9') {
    day = `${day}${date[i]}`;
    ++i;
  }
  if (day.length === 1) day = `0${day}`;

  // jump over the ordinal numbers (st, nd, ..) and the space
  i += 3;

  let month = '';
  while (date[i] !== ' ') {
    month = `${month}${date[i]}`;
    ++i;
  }
  month = monthMap.get(month);

  // after the space the rest is the year
  const year = date.slice(i + 1);

  return `${year}-${month}-${day}`;
};

/**
 * @param {string} date
 * @return {string}
 */
const reformatDate2 = (date) => {
  const monthMap = new Map([
    ['Jan', '01'],
    ['Feb', '02'],
    ['Mar', '03'],
    ['Apr', '04'],
    ['May', '05'],
    ['Jun', '06'],
    ['Jul', '07'],
    ['Aug', '08'],
    ['Sep', '09'],
    ['Oct', '10'],
    ['Nov', '11'],
    ['Dec', '12'],
  ]);

  const [rawDay, rawMonth, year] = date.split(' ');

  const withoutOrdinalsDay = rawDay.slice(0, Math.floor(rawDay.length / 2));
  const day =
    withoutOrdinalsDay.length === 1
      ? `0${withoutOrdinalsDay}`
      : withoutOrdinalsDay;

  const month = monthMap.get(rawMonth);

  return `${year}-${month}-${day}`;
};

const date = '2th Oct 2052';

const output = reformatDate(date);
const output2 = reformatDate2(date);

console.log({ output, output2 }); // eslint-disable-line no-console
