import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StudentService from '../service/StudentService';

const ListStudent = () => {
    const [studentArray, setStudentArray] = useState([]);

    useEffect(() => {
        getAllStudent();
    }, []);

    function getAllStudent() {
        StudentService.getAllStudent()
            .then(res => { setStudentArray(res.data); console.log(res) })
            .catch(e => console.log(e));
    }

    function deleteStudent(e, id) {
        e.preventDefault();
        StudentService.deleteStudent(id)
            .then(() => getAllStudent())
            .catch(e => console.log(e));
    }

    return (
        <div className="user-management-container">
            <h2 className='text-center mb-4'>List Students</h2>
            <button><Link to={"/add-student"} className='btn btn-primary mb-2 mt-3'>Add Student</Link></button>
            <br></br>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Student First Name</th>
                        <th>Student Last Name</th>
                        <th>Student Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {studentArray.map(student =>
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>
                            <button><Link to={`/add-student/${student.id}`}>Update</Link></button>
                            <br></br>
                             
                                <button onClick={(e) => deleteStudent(e, student.stud_id)} className='delete-button'>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListStudent;



 