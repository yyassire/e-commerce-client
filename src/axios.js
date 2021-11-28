import axios from "axios"


export const publicBaseUrl = axios.create({
    baseURL: window.location.hostname === "localhost"? "http://localhost:8800/api/" :"https://yy-e-commerce-server.herokuapp.com/api/",
})
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2QyNjU0OTY5MGQwN2Q3OTUwOTgxYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjMxMzA5M30.soeMIEtD0CHxHdJkFWsiRPpK7XSRvKyxOUMn9Iyer5k"
// const myStorage = localStorage.getItem("persist:root")
// console.log(myStorage)
// console.log("ok")

export const tokenBaseUrl = axios.create({
    baseURL: window.location.hostname === "localhost"? "http://localhost:8800/api/" : "https://yy-e-commerce-server.herokuapp.com/api/",
    headers: {token : `Bearer ${token}`}
})