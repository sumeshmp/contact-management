import React, { useEffect, useState } from 'react'
import ContactCard from './ContactCard'
import AddContact from './AddContact'
import { getContactsApi } from '../../services/allApi'

function ContactList() {

  const [data, setData] = useState([])
  const [result, setResult] = useState({})
  const [resp, setResp] = useState({})


  useEffect(() => {
    getData()
  }, [result, resp])

  const getData = async () => {
    const result = await getContactsApi()
    console.log(result)
    if (result.status == 200) {
      setData(result.data)
    }
  }

  return (
    <>
      <section className='contact-search p-3'>
        <div className='container'>
          <div>
            <h3><span className='text-primary'>Contact</span> Manager
              <AddContact setresult={setResult} />
            </h3>
            A lightweight smart contact app for managing your contacts loved by millions of people. The contacts can either be stored on your device only, or they can also be synchronized by different means. This phone number smart contact phone book will help you keeping your contacts in one place without the hassle of backing up your contacts as the contacts backup are always in sync with the contacts you add. This app light on space and is effective when you have to make contacts backup and keep a phone book that will help you in smart contact keeping.
            
          </div>

          <div className='py-4 row'>
            <div className='col-3'>
              <input type="text" className='form-control' placeholder='Search Names' />
            </div>
            <div className='col'>
              <input type="submit" className='btn btn-outline-secondary' value="Search" />
            </div>
          </div>

        </div>
      </section>

      <section className='contact-list'>
        <div className='container shadow-lg mb-5 ' style={{ borderRadius: "20px" }}>
          {
            data.length > 0 ?
              <div className='row p-2 justify-content-around'>
                {data.map(item => (
                  <ContactCard contact={item} res={setResp} />
                ))}
              </div>

              :
              <h4 className='text-danger text-center'>No Contacts Created!!</h4>
          }

        </div>
      </section>
    </>
  )
}

export default ContactList