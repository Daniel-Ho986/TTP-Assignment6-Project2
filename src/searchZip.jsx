import React, {Component} from 'react'
import axios from 'axios'
import DisplayZip from './displayZip'


class SearchZip extends Component {

    constructor (props) {

        super (props)
        this.state = {

            zipData: [],
            zips: " ",
            match: false
        }
    }
    
    handleChange = (event) => {
        this.setState ({zips: event.target.value})
    }

    fetchCity = () => {
        axios
          .get('http://ctp-zip-api.herokuapp.com/city/SPRINGFIELD')
          .then((result) => {
            this.setState({
              zipData: result.data,
              match: true,
            });
            console.log (result)
          })
          .catch((err) => {
            console.log(err);
          });
      }

    render() {
        return (

            <div>
                <div>
                
                <h4>Enter City</h4>
                <input 
                className= "searchInput"
                name= "seachCity"
                type= "text"
                onChange= {(e) => {this.handleChange(e)}}
                value= {this.state.zips}>
                </input>
                <button onClick={this.fetchCity}>Search</button>
                </div>

            
            {this.state.match ? (

            <div>
                {Array.from(this.state.zipData).forEach((elem) => {return (elem)})}
            </div>
            ) : (
                <p>Doesn't exist </p>
            )}
            </div>
        )
    }
}

export default SearchZip


