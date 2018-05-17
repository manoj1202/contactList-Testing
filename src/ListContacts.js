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
    state = {
        query : ''
    }

    updateQuery =(query) => {
        this.setState =(() => ({
            query : query.trim()
        }))
    }   
    clearQuery = () => {
        this.updateQuery('');
    }
    render(){
        const {query} = this.state
        const {contacts, onDeleteContact, onNavigate} = this.props
        const showingContacts = query === ''
            ? contacts
            : contacts.filter((c) =>(
                c.name.toLowerCase().includes(query.toLowerCase())
                ))
        return(
            <div className = 'list-contacts'>
                
                <div className= 'list-contacts-top'>
                    <input 
                        className='search-contacts' 
                        type='text'   
                        placeholder='Search Contacts'
                        style={{width:'75%', height:'40px', border:'solid', borderColor:'red'}}
                        value= {query}
                        onChange = {(event) => this.updateQuery(event.target.value)}
                    />
                    <a href="#Create"
                        onClick={onNavigate}
                        className="add-contact">
                        Add Contact
                    </a>
                </div>
                {showingContacts.length !== contacts.length && (
                  <div className='showing-contacts'>
                  <span> Now showing {showingContacts.length} of {contacts.length}</span>
                  <button onClick={this.clearQuery}>Show All</button>
                  </div>  
                ) 
                }
                <ol   className='contact-list'>
                    {showingContacts.map((contact) => 
                        <li key={contact.id} className='contact-list-item'>
              <div className='contact-avatar' style={{
                                backgroundImage : `URL(${contact.avatar})`
                                    }} >
                            </div>
                            <div className='contact-details'>
                                <p> {contact.name}</p>
                                <p> {contact.handle}</p>
                            </div>
                            <button 
                             onClick = {() => onDeleteContact(contact)}
                                className='contact-remove'> Remove</button> </li>
                                )} </ol>
                   </div>
        )
    }
}

export default ListContacts