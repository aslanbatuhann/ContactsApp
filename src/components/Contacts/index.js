import {useEffect, useState} from 'react'

import List from './List';
import Form from './Form';
import './styles.css'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname:"batuhan",
      phone_number:"2312312"
    },{
      fullname:"ekin",
      phone_number:"43243"
    },{
      fullname:"isil",
      phone_number:"978967"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])

  return (
    <div id="container">
      <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContacts = {setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts