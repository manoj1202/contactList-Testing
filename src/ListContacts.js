import React from 'react'
import PropTypes from 'prop-type'




// Props by components
// class ListContacts extends Component{
//     render(){
        
//         return (
//             <ol   className='contact-list'>
//                 {this.props.contacts.map((contact) => (
//                     <li key={contact.id} className="contact-list-item">
//                             <div className="contact-avatar" style={{
//                                 backgroundImage : `URL(${contact.avatar})`
//                                   }} >
//                             </div>
//                             <div className="contact-details">
//                                 <p> {contact.name}</p>
//                                 <p> {contact.handle}</p>
//                             </div>
//                             <button className="contact-remove">
//                                  Remove
//                             </button>
//                     </li>
            
                     
//                 ))}

//             </ol>
//         )
//     }
// }

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
                        <button 
                            className="contact-remove"  
                            onClick = {() => props.onDeleteContact(contact)}>
                                 Remove
                        </button>
                    </li>
            
                     
                ))}

            </ol>
    )
}

ListContacts.PropTypes = {
    contacts : PropTypes.array.isRequired,
    onDeleteContact : PropsTypes.func.isRequired
}

export default ListContacts