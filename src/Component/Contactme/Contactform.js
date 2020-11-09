import React from 'react'
import './Contactform.css'
function Contactform() {
    const nameref=React.useRef(null)
    const emailref=React.useRef(null)
    const messageref=React.useRef(null)
    const [formdata,formfunc]=React.useState({name:'',email:'',message:''})
    const [flip,flipfun] = React.useState(false)
    function thankyou(e){
        e.preventDefault()
        if(nameref.current.value==='' & nameref.current.value==='' & nameref.current.value==='') 
            console.log("empty")
        else{
            formfunc({name:nameref.current.value,email:emailref.current.value, message:messageref.current.value})
            
            flipfun(true)
            console.log(formdata)
        }
    }
    React.useEffect(function () {
        if(!flip)
            nameref.current.focus()
        })
    return (
        <div className="formdiv">
            {flip?<h1>submitted</h1>:
            <form className="cform" netlify>
                
                <label className="labelup" htmlFor="name">Name</label>
                <input ref={nameref} className="" placeholder="" id="name" type="text" required/>
                <label className="labelup" htmlFor="email">Email</label>
                <input ref={emailref}  placeholder="" id="email" type="email" required/>
                <label className="labelup" htmlFor="message">Message</label>
                <textarea ref={messageref}  id="message" type="text" rows="10" required></textarea>
                <button onClick={thankyou} type="submit" className="btn btn-lg btn-primary" >send</button>
            </form>
        } 
        </div>
    )
}
export default Contactform