import React from 'react'

const display = (props) => {
        return (
        <div className = "City">
            City: {props.City}
            <div className = "ZipCode">
                ZipCode: {props.Zipcode}
                <div className = "RecordNumber">
                    Record Number: {props.RecordNumber}
                </div>
            </div>
      </div>
        )
    }


export default display