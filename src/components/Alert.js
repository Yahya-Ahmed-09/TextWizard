import React from 'react'

function Alert(props) {
    const alertStyle ={
        position: "absolute",
        width: "100%",
        borderRadius: "0px"
    }
    const captalize = (word) =>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert ? (<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={alertStyle}>
        <strong>{captalize(props.alert.type)}</strong>: {props.alert.msg}
        
    </div>
    ): null
  )
}

export default Alert
