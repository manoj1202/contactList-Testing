import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class CreateContact extends Component{
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