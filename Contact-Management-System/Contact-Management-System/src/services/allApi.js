import axios from "axios";

const base_url="https://contact-server-dai9.onrender.com"

export const addContactApi=async(data)=>{
    return await axios.post(`${base_url}/contacts`,data)
}

export const getContactsApi=async()=>{
    return await axios.get(`${base_url}/contacts`)
}

export const deleteContactApi=async(id)=>{
    return await axios.delete(`${base_url}/contacts/${id}`)
}

export const editContactApi=async(id,data)=>{
    return await axios.put(`${base_url}/contacts/${id}`,data)
}