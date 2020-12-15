import React from 'react'

export default function Notify(){
  
  return(
    <div className="notify-panel">
      <h4 className="text-center mt-4">Notifications</h4><hr/>
      <ul style={{listStyle:'none', marginLeft:'10px'}}>
        <li style={{height:'30px',marginTop:'5px',marginBottom:'5px',borderBottom:'1px solid #ddd'}}>Notification 1 was created by user X</li>
        <li style={{height:'30px',marginTop:'5px',marginBottom:'5px',borderBottom:'1px solid #ddd'}}>Notification 2 was created by user Y</li>
        <li style={{height:'30px',marginTop:'5px',marginBottom:'5px',borderBottom:'1px solid #ddd'}}>Notification 3 was created by user Z</li>
        <li style={{height:'30px',marginTop:'5px',marginBottom:'5px',borderBottom:'1px solid #ddd'}}>Notification 4 was created by user A</li>
      </ul>
    </div>
  )
}