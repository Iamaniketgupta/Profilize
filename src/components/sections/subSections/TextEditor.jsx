/* eslint-disable react/prop-types */
// import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditor(props) {
  const { onChange, value } = props;
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'size': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent'
  ];

  return (
    <div className='my-3'>
      <ReactQuill
        modules={modules}
        formats={formats}
        value={value}
        onChange={onChange}
        theme="snow"
        className='mx-4 mb-[100px] h-[100px]'
        />
    </div>
  );
}

export default TextEditor;
