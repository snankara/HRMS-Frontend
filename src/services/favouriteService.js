import axios from "axios";

export default class FavouriteService{
    add(favourite){
        return axios.post("http://localhost:8080/api/favourites/add",favourite);
    }

    deleteById(favouriteId){
        return axios.post("http://localhost:8080/api/favourites/deleteById?favouriteId="+favouriteId);
    }

    findByCandidateId(candidateId){
        return axios.get("http://localhost:8080/api/favourites/findByCandidateId?candidateId="+candidateId);
    }

}