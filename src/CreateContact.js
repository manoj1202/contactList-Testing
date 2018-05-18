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
                <form>
                    <div align="center">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Handle" />
                    <button>Add Contact </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateContact