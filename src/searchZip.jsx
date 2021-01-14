import React, {Component} from 'react'
import axios from 'axios'
import './App.css'

class SearchZip extends Component {

    constructor (props) {

        super (props)
        this.state = {

            cityData: [],
            city: "",
            match: false
        }
    }
    
    handleChange = (event) => {
        this.setState ({city: event.target.value})
    }

    fetchCity = () => {
        axios
          .get(`http://ctp-zip-api.herokuapp.com/city/${this.state.city.toUpperCase()}`)
          .then((result) => {
            this.setState({
              cityData: result.data,
              match: true,
            });

            console.log (this.state.cityData)
          })
          .catch((err) => {
            console.log(err);
          });
      }

    render() {
        return (

            <div className="searchCity">
                <div>
                
                <h4>Enter City</h4>
                <input 
                className= "searchInput"
                name= "searchCity"
                type= "text"
                onChange= {(e) => {this.handleChange(e)}}
                value= {this.state.city}>
                </input>
                <button onClick={this.fetchCity}>Search</button>
                </div>

            
            {this.state.match ? (

            <div>
                {this.state.cityData.map((elem) => {
                    return (
                        <div> 
                            ZipCodes: {elem} 
                        </div>
                    )
                })}
            </div>
            ) : (
                <p>Doesn't exist</p>
            )}
            </div>
        )
    }
}

export default SearchZip


