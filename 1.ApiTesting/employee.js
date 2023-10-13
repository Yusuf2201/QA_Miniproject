const request = require('supertest')('https://dummy.restapiexample.com/');
const chai = require('chai');
const chaiJsonSchema = require('chai-json-schema-ajv');
const updatedEmployeeData1 = require('./Payload/UpdateData1');
const newEmployeeData2 = require('./Payload/UpdateData2');
const employeeSchema1 = require('./Utils/JSON_Schema1');
const employeeSchema2 = require('./Utils/JSON_Schema2');

chai.use(chaiJsonSchema);
const expect = chai.expect;
let response;
describe('Employee API Tests', function () 
{
        // afterEach(async function(){
        //  await new Promise(res => setTimeout(res, 1000 * 60))
        // })
        describe('Menerima daftar karyawan', function () {
                it('validasi response status = 200', async function() {
                        response = await request.get('api/v1/employees');
                        expect(response.status).to.equal(200);
                })
                it('validasi tipe konten adalah application/json', async function(){
                        expect(response.headers['content-type']).to.include('application/json');
                })
                it('validasi tipe data adalah array', async function(){
                        expect(response.body.data).to.be.an('array');
                })
                it('validasi dengan JSON schema yang dibuat', async function(){
                        expect(response.body.data).to.be.jsonSchema(employeeSchema1);
                })

        })
        describe('Menerima daftar karyawan dengan ID 1', function () {
                it('validasi response status = 200', async function() {
                        await new Promise(res => setTimeout(res, 1000 * 60))
                        response = await request.get('api/v1/employee/1');
                        expect(response.status).to.equal(200);
                })
                it('validasi tipe konten adalah application/json', async function(){
                        expect(response.headers['content-type']).to.include('application/json');
                })
                it('validasi tipe data adalah object', async function(){
                        expect(response.body.data).to.be.an('object');
                })
                it('validasi Schema memiliki properti id', async function(){
                        expect(response.body.data).to.have.property('id')
                })
                it('validasi dengan JSON schema yang dibuat', async function(){
                        expect(response.body.data).to.be.jsonSchema(employeeSchema2);
                })
        })
        describe('Menerima NULL karena daftar karyawan tidak tersedia', function () {
                it('validasi response status = 200', async function() {
                        await new Promise(res => setTimeout(res, 1000 * 60))
                        response = await request.get(`api/v1/employee/9999`);
                        expect(response.status).to.equal(200);
                })
                it('validasi data adalah null', async function(){
                        expect(response.body.data).to.equal(null);
                })
        })
        describe('Membuat daftar satu karyawan baru', function () {
                it('validasi response status = 200', async function() {
                        await new Promise(res => setTimeout(res, 1000 * 60))
                        response = await request.post('api/v1/create').send(newEmployeeData2)
                        expect(response.status).to.equal(200);
                })
                it('validasi tipe konten adalah application/json', async function(){
                        expect(response.headers['content-type']).to.include('application/json');
                })
                it('validasi tipe data adalah object', async function(){
                        expect(response.body.data).to.be.an('object');
                })
                it('validasi Schema memiliki properti id', async function(){
                        expect(response.body.data).to.have.property('id')
                })
                it('Validasi respons untuk memeriksa apakah karyawan baru telah berhasil dibuat', async function(){
                        expect(response.body.data.employee_name).to.equal(newEmployeeData2.employee_name);
                })
        })
        describe('Mengupdate satu daftar karyawan', function () {
                it('validasi response status = 200', async function() {
                        await new Promise(res => setTimeout(res, 1000 * 60))
                        const employeeIdToUpdate = 21;  
                        response = await request
                                .put(`api/v1/update/${employeeIdToUpdate}`)
                                .send(updatedEmployeeData1);
                        expect(response.status).to.equal(200);
                })
                it('validasi tipe konten adalah application/json', async function(){
                        expect(response.headers['content-type']).to.include('application/json');
                })
                it('validasi tipe data adalah object', async function(){
                        expect(response.body.data).to.be.an('object');
                })
                it('Validasi respons untuk memeriksa apakah karyawan baru telah berhasil diupdate', async function(){
                        expect(response.body.data.employee_name).to.equal(updatedEmployeeData1.employee_name);
                })
        })
        describe('Menghapus satu daftar karyawan', function () {
                it('validasi response status = 200', async function() {
                        await new Promise(res => setTimeout(res, 1000 * 60))
                        const employeeIdToDelete = 2; 
                        response = await request.delete(`api/v1/delete/${employeeIdToDelete}`);
                })
                it('validasi tipe konten adalah application/json', async function(){
                        expect(response.headers['content-type']).to.include('application/json');
                })
                it('Validasi respons untuk memeriksa apakah karyawan baru telah berhasil dihapus', async function(){
                        expect(response.body.message).to.equal('Successfully! Record has been deleted');
                })
        })
  })