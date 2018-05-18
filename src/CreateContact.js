import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import SerializeForm from 'form-serialize'
class CreateContact extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        const values = SerializeForm(e.target, {hash : true})
        console.log('values',values)
        if(this.props.onCreateContact){
            this.props.onCreateContact(values)
        }
    }
    render(){
        return(
            <div>
                <button style={{margin:'10px'}}>
                    <Link 
                    to = '/'>Back
                    </Link>
                </button>
                <form onSubmit={this.handleSubmit}>
                    <div align="center">
                    <input type="text" name="Name" placeholder="Name" />
                    <input type="text" name="Handel" placeholder="Handle" />
                    <button>Add Contact </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateContact