import React from 'react'


//Stateless functional components
function ListContacts(props){
    return(
         <ol   className='contact-list'>
                {props.contacts.map((contact) => (
                    <li key={contact.id} className="contact-list-item">
                            <div className="contact-avatar" style={{
                                backgroundImage : `URL(${contact.avatar})`
                                  }} >
                            </div>
                            <div className="contact-details">
                                <p> {contact.name}</p>
                                <p> {contact.handle}</p>
                            </div>
                            <button className="contact-remove">
                                 Remove
                            </button>
                    </li>
            
                     
                ))}

            </ol>
    )
}


export default ListContacts