const request = require('supertest')('https://dummy.restapiexample.com/');
const chai = require('chai');
const chaiJsonSchema = require('chai-json-schema-ajv');
const employeeSchema = require('./Utils/JSON_Schema');
const updatedEmployeeData1 = require('./Utils/UpdateData1');
const newEmployeeData2 = require('./Utils/UpdateData2');

chai.use(chaiJsonSchema);
const expect = chai.expect;

describe('Employee API Tests', function () 
{
        afterEach(async function(){
         await new Promise(res => setTimeout(res, 1000 * 60))
        })

    it('Menerima daftar karyawan dan divalidasi ke skema JSON', async function () {
            const response = await request.get('api/v1/employees');
            expect(response.status).to.equal(200);
            expect(response.headers['content-type']).to.include('application/json');

            // memvalidasi respon seperti JSON Schema yang dibuat
            expect(response.body.data).to.be.an('array').that.is.not.empty;
            expect(response.body.data).to.be.jsonSchema(employeeSchema);
    });

    it('Menerima daftar karyawan dengan ID 1 dan validasi ke skema JSON', async function () {
            const response = await request.get(`api/v1/employee/1`);
            expect(response.status).to.equal(200);
            expect(response.headers['content-type']).to.include('application/json');

            //Validasi dengan Skema JSON
            expect(response.body.data).to.be.jsonSchema(employeeSchema);
    });

    it('menerima kembalian eror karena daftar karyawan tidak tersedia', async function () {
            const response = await request.get(`api/v1/employee/9999`);

            expect(response.status).to.equal(200);
            expect(response.body.data).to.equal(null);
            // console.log(response.body)
        });

    it('membuat daftar satu karyawan baru dan menvalidasi responnya', async function () {
  
            const response = await request.post('api/v1/create').send(newEmployeeData2);
        
            expect(response.status).to.equal(200);
            expect(response.headers['content-type']).to.include('application/json');
            // Validasi respons untuk memeriksa apakah karyawan baru telah berhasil dibuat
            expect(response.body.status).to.equal('success');
            expect(response.body.data).to.be.an('object');
            expect(response.body.data).to.have.property('id');
            expect(response.body.data.employee_name).to.equal(newEmployeeData2.employee_name);
            });
    
    it('mengupdate satu daftar karyawan dan menvalidasi responnya', async function () {
            const employeeIdToUpdate = 21;  
            const response = await request
                .put(`api/v1/update/${employeeIdToUpdate}`)
                .send(updatedEmployeeData1);

            expect(response.status).to.equal(200);
            expect(response.headers['content-type']).to.include('application/json');
            expect(response.body.status).to.equal('success');
            expect(response.body.data).to.be.an('object');
           
            // expect(response.body.data.id).to.equal(employeeIdToUpdate);
            expect(response.body.data.employee_name).to.equal(updatedEmployeeData1.employee_name);
    })

    it('menghapus satu daftar karyawan dan menvalidasi responnya', async function () {
            const employeeIdToDelete = 2; 
            const response = await request.delete(`api/v1/delete/${employeeIdToDelete}`);
        
            // Validasi respons untuk memeriksa apakah karyawan telah berhasil dihapus
            expect(response.status).to.equal(200);
            expect(response.headers['content-type']).to.include('application/json');
            expect(response.body.status).to.equal('success');
            expect(response.body.message).to.equal('Successfully! Record has been deleted');
            });
  })