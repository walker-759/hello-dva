import axios from 'axios'
export const getusersapi=()=>{
    return axios({
        method:'GET',
        url:'api/users'
    })
}