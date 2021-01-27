class ApplicationsDatabase {
  constructor() {
    this._data = [];
    this._counter = 0;

    this.insert({
      applicant_first_name: "John",
      applicant_last_name: "Doe",
      loan_amount: 400000,
    });
    this.insert({
      id: 10,
      applicant_first_name: "Mike",
      applicant_last_name: "Roster",
      loan_amount: 1000000,
    });
  }

  async all() {
    return this._data;
  }

  async byId(id) {
    return this._data[id];
  }

  async insert(application) {
    const record = {
      id: this._counter,
      ...application,
    };

    this._counter += 1;
    this._data.push(record);

    return record;
  }
}

export default new ApplicationsDatabase();
