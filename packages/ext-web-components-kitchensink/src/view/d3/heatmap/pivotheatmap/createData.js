const employees = [
  'Alex',
  'Kevin',
  'Nige',
  'Phil',
  'Don',
  'Ross',
  'Vitaly'
];
const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
];
const daysMobile = [
  'Mon',
  'Tue',
  'Wed',
  'Thur',
  'Fri'
];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max-min+1)) + min;
const randomItem = data => {
    return data[getRandomInt(0, data.length-1)];
};

export default function refreshRandomData(size=100) {
    const data = [],
        delta = 20 + Math.floor(Math.random() * 260);

    const isMobile = Ext.platformTags.phone;
    let targetDays = days;

    if (isMobile) {
      targetDays = daysMobile;
    }

    for(let i=0; i<size; i++) {

        const day = randomItem(targetDays);
        data.push({
            employee: randomItem(employees),
            dayNumber: Ext.Array.indexOf(targetDays, day),
            day,
            sales: 20 + Math.floor(Math.random() * delta)
        });
    }

    return data;
}
