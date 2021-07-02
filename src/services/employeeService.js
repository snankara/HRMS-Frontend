import axios from "axios";

export default class EmployeeService{
    update(employee){
        return axios.put("http://localhost:8080/api/employees/update",employee);
    }
    findById(id){
        return axios.get(`http://localhost:8080/api/employees/findById?id=${id}`);
    }
}