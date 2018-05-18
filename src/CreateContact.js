import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class CreateContact extends Component{
    render(){
        return(
            <div>
                <button>
                <Link 
                to = '/'>Back
                </Link>
                </button>
            </div>
        )
    }
}

export default CreateContact