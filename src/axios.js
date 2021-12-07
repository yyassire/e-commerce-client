import axios from "axios"


export const publicBaseUrl = axios.create({
    baseURL: "https://yy-e-commerce-server.herokuapp.com/api/",
})
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2QyNjU0OTY5MGQwN2Q3OTUwOTgxYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjMxMzA5M30.soeMIEtD0CHxHdJkFWsiRPpK7XSRvKyxOUMn9Iyer5k"
// const myStorage = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
// console.log(myStorage)


export const tokenBaseUrl = axios.create({
    baseURL: "https://yy-e-commerce-server.herokuapp.com/api/",
    headers: { token: `Bearer ${token}` }
})