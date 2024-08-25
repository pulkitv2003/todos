import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

function InputList() {

const inputRef = useRef();
const [list,setList] = useState([]);
const [doneList, setDoneList] = useState([]);
const [deleteList, setDeleteList] = useState([]);

const handleSubmit = () => {
    const newItem = inputRef.current.value;
    setList(list.concat(newItem));
}

const handleDone = () =>{
    const newItem = inputRef.current.value;
    setDoneList(doneList.concat(newItem));
    setList(list.filter((item) =>  item !== newItem));
}
const handleDelete = () =>{
    const newItem = inputRef.current.value;
    setDeleteList(deleteList.concat(newItem));
    setList(list.filter((item) =>  item !== newItem));

}
  return (
    <>
    <input type="text"  placeholder='Enter Text' ref = {inputRef}/>
    <button onClick={handleSubmit}>Submit</button>

    <div>
    <h1>ToDo List : </h1>
    <ol>
        {list.map((item,idx) => <li key = {idx}>{item}
            <button onClick={handleDone}>Done</button>
            <button onClick={handleDelete}>Delete</button>
        </li>)}
    </ol>
    </div>

    <div>
    <h1>Done tasks : </h1>
    <ol>
        {doneList.map((doneItem,idx) => <li key = {idx}>{doneItem}</li>)}
    </ol>
    </div>
    <div>
    <h1>Deleted tasks : </h1>
    <ol>
        {deleteList.map((deleteItem,idx) => <li key = {idx}>{deleteItem}</li>)}
    </ol>
    </div>
    </>
  )
}

export default InputList;


