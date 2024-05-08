import axios from "axios";

const BASE_URL = "http://localhost:8083/student";
class StudentService{

    getAllStudent(){
        return axios.get(BASE_URL);
    }
    
    saveStudent(studentData){
        return axios.post(BASE_URL, studentData);
    }
    updateStudent(id, studentData){
        return axios.put(`${BASE_URL}/${id}`, studentData)
    }
    getStudentById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }
    deleteStudent(id){
        return axios.delete(BASE_URL +"/" +id);
    }

}
export default new StudentService();
