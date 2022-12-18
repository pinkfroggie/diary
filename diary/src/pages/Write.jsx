import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='title' />
        <div className="editorContainer">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <span><b>Status:</b> <i>Draft</i></span>
          <div className="buttons">
          <button>Publish</button>
          <button>Save as a draft</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
