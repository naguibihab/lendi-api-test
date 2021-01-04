class ApplicationsDatabase {
  constructor() {
    this._data = [];
    this._counter = 0;

    this.insert({
      applicant_first_name: 'John',
      applicant_last_name: 'Doe',
      loan_amount: 400000,
    });
    this.insert({
      applicant_first_name: 'Mike',
      applicant_last_name: 'Roster',
      loan_amount: 1000000,
    });
  }

  all() {
    return Promise.resolve(this._data);
  }

  byId(id) {
    return Promise.resolve(this._data[id]);
  }

  insert(application) {
    const record = {
      id: this._counter,
      ...application,
    };

    this._counter += 1;
    this._data.push(record);

    return Promise.resolve(record);
  }
}

export default new ApplicationsDatabase();
