import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('Applications', () => {
  it('should get all applications', () =>
    request(Server)
      .get('/api/v1/applications')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('array')
          .of.length(2);
      }));

  it('should add a new application', () =>
    request(Server)
      .post('/api/v1/applications')
      .send({
        applicant_first_name: 'John',
        applicant_last_name: 'Doe',
        loan_amount: 100000,
      })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .to.deep.equal({
            id: 2,
            applicant_first_name: 'John',
            applicant_last_name: 'Doe',
            loan_amount: 100000,
          });
      }));

  it('should get an application by id', () =>
    request(Server)
      .get('/api/v1/applications/2')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .to.deep.equal({
            id: 2,
            applicant_first_name: 'John',
            applicant_last_name: 'Doe',
            loan_amount: 100000,
          });
      }));
});
