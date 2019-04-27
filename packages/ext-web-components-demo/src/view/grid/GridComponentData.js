export class GridComponentData {

  data = []

  constructor(numRecords) {
    this.numRecords = numRecords
    this.createFakeData(this.numRecords, this.data);
  }

  process = function(data) {
    for (var i = 0; i < data.length; ++i) {
      var d = data[i];
      d.ratingLastYear = Math.max(Math.round(d.rating[0] / 2), 1);
      d.ratingThisYear = Math.max(Math.round(d.rating[d.rating.length - 1] / 2), 1);
    }
    return data;
  }

  random(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
  }

  getEmployeeNo() {
    var me = this;
    var out = '',
        i = 0;
    for (; i < 6; ++i) {
      out += me.random(0, 7);
    }
    return out;
  }

  createFakeData(count, data) {
    var me = this;
    var firstNames   = ['Ed', 'Tommy', 'Aaron', 'Abe', 'Jamie', 'Adam', 'Dave', 'David', 'Jay', 'Nicolas', 'Nige'],
        lastNames    = ['Spencer', 'Maintz', 'Conran', 'Elias', 'Avins', 'Mishcon', 'Kaneda', 'Davis', 'Robinson', 'Ferrero', 'White'],
        departments  = ['Engineering', 'Sales', 'Marketing', 'Managment', 'Support', 'Administration'],
        ratings      = [1, 2, 3, 4, 5],
        salaries     = [100, 400, 900, 1500, 1000000],
        noticePeriods= ['2 weeks', '1 month', '3 months'],
        i;

    for (i = 0; i < (count || 25); i++) {
      var firstName   = firstNames[me.random(0, firstNames.length - 1)],
          lastName    = lastNames[me.random(0, lastNames.length - 1)],
          name        = Ext.String.format("{0} {1}", firstName, lastName),
          email       = firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@sentcha.com',
          rating      = ratings[(name === 'Nige White') ? 0 : me.random(0, ratings.length - 1)],
          salary      = salaries[(name === 'Nige White') ? 4 : me.random(0, salaries.length - 1)],
          department  = departments[me.random(0, departments.length - 1)],
          ageInYears  = me.random(23, 55),
          dob         = new Date(new Date().getFullYear() - ageInYears, me.random(0, 11), me.random(0, 31)),
          joinDate    = new Date(new Date() - me.random(60, 2000) * 1000 * 60 * 60 * 24),
          sickDays    = me.random(0, 10),
          holidayDays = me.random(0, 10),
          holidayAllowance = me.random(20, 40);

      data.push({
        employeeNo: me.getEmployeeNo(),
        rating: rating,
        salary: salary,
        forename: firstName,
        surname: lastName,
        email: email,
        department: department,
        dob: dob,
        joinDate: joinDate,
        sickDays: sickDays,
        holidayDays: holidayDays,
        holidayAllowance: holidayAllowance,
        noticePeriod: noticePeriods[me.random(0, noticePeriods.length - 1)]
      });
    }
  }

}