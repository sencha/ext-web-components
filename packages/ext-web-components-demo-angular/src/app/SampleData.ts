//this.gridCmp.setData(new SampleData(50).data)
declare var Ext: any
export class SampleData {
  data:any = []
  numRecords:any
  constructor(numRecords) {
    this.numRecords = numRecords
    this.createFakeData(this.numRecords, this.data);
  }
  random(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
  }
  createFakeData(count, data) {
    var me = this;
    var firstNames   = ['Nikki', 'Marc', 'Nick', 'Andy', 'Daniel'],
        lastNames    = ['Jones', 'Smith', 'Johnson', 'Williams', 'Brown', 'Miller'],
        i;
    for (i = 0; i < (count || 25); i++) {
      var id          = i + 1,
          firstName   = firstNames[me.random(0, firstNames.length - 1)],
          lastName    = lastNames[me.random(0, lastNames.length - 1)],
          name        = Ext.String.format("{0} {1}", firstName, lastName),
          email       = firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@sentcha.com',
          phone       = '(' + me.random(300, 600) + ')' + me.random(300, 600) + '-' + me.random(3000, 6000)
      data.push({
        id: id,
        name: name,
        email: email,
        phone: phone
      });
    }
  }
}