import axios from 'axios'

export default class JobPositionService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobpositions/getAll")
    }

    add(jobPosition){
        return axios.post("http://localhost:8080/api/jobpositions/add",jobPosition)
    }

}
