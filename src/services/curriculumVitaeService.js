import axios from "axios";

export default class CurriculumVitaeService{
    add(values){
        return axios.post("http://localhost:8080/api/curriculumVitaes/add", values)
    }

    deleteById(curriculumVitaeId){
        return axios.post("http://localhost:8080/api/curriculumVitaes/deleteById?curriculumVitaeId="+curriculumVitaeId)
    }

    update(values){
        return axios.put("http://localhost:8080/api/curriculumVitaes/update", values)
    }

    addImage(id, formData){
        return axios.post("http://localhost:8080/api/curriculumVitaes/addImage?id="+id, formData)
    }

    getByCandidateIdLastItem(candidateId){
        return axios.get("http://localhost:8080/api/curriculumVitaes/getByCandidateIdLastItem?candidateId="+candidateId)
    }

    getByCandidateIdCurriculumVitae(candidateId){
        return axios.get("http://localhost:8080/api/curriculumVitaes/getByCandidateId?candidateId="+candidateId)
    }

    findById(curriculumVitaeId){
        return axios.get("http://localhost:8080/api/curriculumVitaes/findById?curriculumVitaeId="+curriculumVitaeId)
    }
}