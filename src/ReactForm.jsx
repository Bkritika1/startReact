// import { useState } from "react"

import { useState } from "react";

// export default function ReactForm() {
//     const [person, setPerson] = useState({

//         firstName: 'jane',
//         lastName: "jacobs",
//     })
//     function handleChange(e) {
//         setPerson({
//             ...person,
//             [e.target.name]: e.target.value
//         });
//     }


//     return (
//         <>
//         <form>
//             <label>
//                 First name:
//                 <input name="firstName" value={person.firstName} type="text"onChange={handleChange}/>
//             </label>
//             <label>
//                 Last name:
//                 <input name="lastName" value={person.lastName} type="text" onChange={handleChange} />
//             </label>
//         </form>
//         <button>kaise hoga</button>
//         <p></p>
//         </>
//     )
// }

export default function EditProfile() {
    const[isEditing, setisEditing] = useState(false)

  return (
    <form>
      <label>
        First name:{' '}
      {isEditing ? <input /> : <b>Jane</b>}
      </label>
      <label>
        Last name:{' '}
       {isEditing ? <input /> : <b>Jacobs</b>}
      </label>
      <button  onClick={() => setisEditing(!isEditing)} type="button">
        {isEditing ? "save" : "EditProfile"}
        
      </button>
      <p><i>Hello, Jane Jacobs!</i></p>
    </form>
  );
}
