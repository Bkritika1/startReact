import { useState } from "react"

export default function FormMaking() {

  const [person, setPerson] = useState({
    firstName: 'kritika',
    lastName: "Sharma",
    email: 'kritika123@gmail.com',
    contact: {
      phoneNo: '+9887464654'
    }
  });;

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }
  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    })
  }
  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
    })
  }
  function handleContactChange(e) {
    setPerson({
      ...person,
      contact: e.target.value

    })

  }
  //   function handleChange(e){
  //     setPerson ({
  //         ...person,
  //         [e.target.name]: e.target.value
  //     });
  //   }


  return (

    <>
      <div className="form">
        <label>
          First name:
          <input value={person.firstName} onChange={handleFirstNameChange} />
        </label>
        <label>
          Last name:
          <input value={person.lastName} onChange={handleLastNameChange} />
        </label>
        <label>
          Email :
          <input value={person.email} onChange={handleEmailChange} />
        </label>
        <lable>
          Contact :
          <input value={person.contact.phoneNo} onChange={handleContactChange} />
        </lable>
        {/* <label>
                First name:
                <input name="firstName" value={person.firstName} onChange={handleChange}/>
            </label>
            <label>
                Last name:
                <input name="lastName" value ={person.lastName} onChange={handleChange}/>
            </label>
            <label>
              Email :
              <input  name="email" value={person.email} onChange={handleChange}/>  
            </label> */}

      </div>
    </>
  )
}