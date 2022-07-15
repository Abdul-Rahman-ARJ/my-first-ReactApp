import React, {useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

  
    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }



    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className={`btn btn-${props.mode==='dark'?'primary':'info'} mx-1 my-1 bg-${props.mode==='dark'?'dark':'light'}`} onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        </div>
        </>
    )
}