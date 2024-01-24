export default (axios)=>({
    uploadFile(data, showLoading){
        return axios.post(`/wedding/sis/upload`, data, showLoading)
    },
    listSisWedding(){
        return axios.get(`/wedding/sis`)
    },
    createSisWedding(data){
        return axios.post(`/wedding/sis`, data)
    },
    updateSisWedding(data, ID){
        return axios.put(`/wedding/sis/${ID}`, data)
    },
    getSisWedding(ID){
        return axios.get(`/wedding/sis/${ID}`)
    },
    deleteSisWedding(ID){
        return axios.delete(`/wedding/sis/${ID}`)
    }
})