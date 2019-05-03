import './ReconfigureGridComponent.html';
import model from '../../data/GridModel';

export default class ReconfigureGridComponent {
  constructor () {
    this.lastNames= ['Jones', 'Smith', 'Lee', 'Wilson', 'Black', 'Williams', 'Lewis', 'Johnson', 'Foot', 'Little', 'Vee', 'Train', 'Hot', 'Mutt'];
    this.firstNames= ['Fred', 'Julie', 'Bill', 'Ted', 'Jack', 'John', 'Mark', 'Mike', 'Chris', 'Bob', 'Travis', 'Kelly', 'Sara'];
    this.cities= ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia', 'Phoenix', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
    this.departments= ['Development', 'QA', 'Marketing', 'Accounting', 'Sales'];

    this.configs = {
        Employees: {
            store: this.createEmployeeStore(),
            columns: [{
                text: 'First Name',
                dataIndex: 'forename',
                flex: 1
            }, {
                text: 'Last Name',
                dataIndex: 'surname',
                flex: 1
            }, {
                text: 'Employee No.',
                dataIndex: 'employeeNo',
                flex: 1
            }, {
                text: 'Department',
                dataIndex: 'department',
                flex: 1
            },{
                text:'Name',
                dataIndex: 'name',
                flex: 1
            }]
        },
        Offices: {
            store: this.createOfficeStore(),
            columns: [{
                text: 'City',
                dataIndex: 'city',
                flex: 1
            }, {
                text: 'Total Employees',
                dataIndex: 'totalEmployees',
                flex: 1
            }, {
                text: 'Manager',
                dataIndex: 'manager',
                flex: 1
            }]
        }
    };
  }

  createEmployeeStore() {
      var data = [],
          usedNames = {},
          i, name;

      for (i = 0; i < 20; ++i) {
          name = this.getUniqueName(usedNames);

          data.push({
              forename: name[0],
              surname: name[1],
              employeeNo: this.getEmployeeNo(),
              department: this.getDepartment()
          });
      }

      return new Ext.data.Store({
          model,
          data: data
      });
  }

  createOfficeStore() {
       var data = [],
          usedNames = {},
          usedCities = {},
          i;

      for (i = 0; i < 7; ++i) {
          data.push({
              city: this.getUniqueCity(usedCities),
              manager: this.getUniqueName(usedNames).join(' '),
              totalEmployees: Ext.Number.randomInt(10, 25)
          });
      }

      return new Ext.data.Store({
          model,
          data: data
      });
  }

  generateName() {
       const lasts = this.lastNames,
          firsts = this.firstNames,
          lastLen = lasts.length,
          firstLen = firsts.length,
          getRandomInt = Ext.Number.randomInt,
          first = firsts[getRandomInt(0, firstLen - 1)],
          last = lasts[getRandomInt(0, lastLen - 1)];
      return [first, last];
  }

  getUniqueName(used) {
      const name = this.generateName(), key = name[0] + name[1];

      if (used[key]) {
          return this.getUniqueName(used);
      }

      used[key] = true;
      return name;
  }

  getCity() {
      const cities = this.cities, len = cities.length;
      return cities[Ext.Number.randomInt(0, len - 1)];
  }

  getUniqueCity(used) {
      const city = this.getCity();

      if (used[city]) {
          return this.getUniqueCity(used);
      }
      used[city] = true;

      return city;
  }

  getEmployeeNo() {
      let out = '', i;

      for (i = 0; i < 6; ++i) {
          out += Ext.Number.randomInt(0, 7);
      }
      return out;
  }

  getDepartment() {
      const departments = this.departments,
          len = departments.length;
      return departments[Ext.Number.randomInt(0, len - 1)];
  }

  onGridReady = (event) => {
    this.grid = event.detail.cmp;
  }

  onSegmentedButtonChange = (event) => {
    const selectedConfig = event.detail.value;

    this.grid.setColumns(this.configs[selectedConfig].columns);
    this.grid.setStore(this.configs[selectedConfig].store);
  }
}
