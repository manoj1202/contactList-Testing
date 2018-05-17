import React,{Component} from 'react'
import PropTypes from 'prop-types'




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
// function ListContacts(props){
//     return(
//          <ol   className='contact-list'>
//                 {props.contacts.map((contact) => (
//                     <li key={contact.id} className="contact-list-item">
//                         <div className="contact-avatar" style={{
//                             backgroundImage : `URL(${contact.avatar})`
//                                 }} >
//                         </div>
//                         <div className="contact-details">
//                             <p> {contact.name}</p>
//                             <p> {contact.handle}</p>
//                         </div>
//                         <button 
//                             className="contact-remove"  
//                             onClick = {() => props.onDeleteContact(contact)}>
//                                  Remove
//                         </button>
//                     </li>
            
                     
//                 ))}

//             </ol>
//     )
// }

// ListContacts.propTypes = {
//    contacts : PropTypes.array.isRequired ,
//     onDeleteContact : PropTypes.func.isRequired,
// }

class ListContacts extends Component{
    static propTypes ={
        contacts : PropTypes.array.isRequired ,
        onDeleteContact : PropTypes.func.isRequired,
    }
    state ={
        query : ''
    }

    render(){
        return(
            <div className = "list-contacts">
                <div className= "list-contacts-top">
                    <input 
                        className="search-contacts" 
                        type="text"   
                        placeholder="Search Contacts"
                        style={{width:'75%', height:'40px'}}>
                    </input>
                </div>
                <ol   className='contact-list'>
                    {this.props.contacts.map((contact) => (
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
                                onClick = {() => this.props.onDeleteContact(contact)}>
                                    Remove
                            </button>
                        </li>
                
                        
                    ))}

                </ol>
            </div>
        )
    }
}

export default ListContacts