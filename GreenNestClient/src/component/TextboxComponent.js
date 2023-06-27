import React from 'react'

function TextboxComponent(props) {
  const onTextCange=(e)=>{
    props.func(e);
  }
  return (
  <>
<div className='wrap'>
<label htmlFor=""className='form-label'>{props.label}</label>
  <input type={`${props.type}`} className='form-textbox' onChange={(e)=>onTextCange(e)}  value={props.value}placeholder={`${props.placeholder}`}name={`${props.name}`}/>
</div>
  </>

  )
}

export default TextboxComponent