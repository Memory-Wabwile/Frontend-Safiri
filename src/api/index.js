import axios  from "axios";
const homeUrl ="https://backend-safiri.herokuapp.com/"

const registerDriverUrl = `${homeUrl}registration/driver/`;
const registerCustomerUrl = `${homeUrl}registration/customer/`;
const loginUrl= `${homeUrl}login/`;

export const registerDriver =(driver)=> axios.post(registerDriverUrl, driver)
export const registerCustomer = (customer)=> axios.post(registerCustomerUrl, customer)
export const login = (info)=> axios.post(loginUrl,info)

