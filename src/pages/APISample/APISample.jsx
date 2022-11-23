import React,{useState, useEffect} from 'react'
import axios from 'axios';

const APISample = () => {
  const [sampleValue, setSampleValue] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');
  const sampleAPI = "https://jsonplaceholder.typicode.com/posts/"

  useEffect(() => {
    getData();
  },[]);

  const getData = async () => {
    setSampleValue([]);
    const { data } = await axios.get(sampleAPI);
    setSampleValue(data);
    
  }

  const addData = async (e) => {
    e.preventDefault();
    await axios
      .post(sampleAPI, { title: newTitle, body: newBody })
      .then( res => {
        console.log(res)
        setNewTitle("")
        setNewBody("")
        getData()
        alert("Posting Success")
      })
      .catch(ex => {
        alert("Something went wrong. Please check the server API and try again");
        console.error(ex);
      });
  }

  const handleNewTitle = (e) => {
    setNewTitle(e.currentTarget.value)
  }

  const handleNewBody = (e) => {
    setNewBody(e.currentTarget.value)
  }

  const tableContainer = {
    border: "1px solid black",
    width:"fit-content",
    height:"fit-content",
    maxHeight:"20rem",
    overflow:"auto",
  }
  
  const tableHeader = {
    display:"flex",
    width:"100%",
    justifyContent:"space-around"
  }

  const tableRow = {
    justifyContent:"space-around",
    borderBottom:"1px solid black",
  }

  const tableCell = {
    width:"20rem",
    display:"flex",
    aligntItems:"center",
    justifyContent:"center",
    padding:"1rem"
  }

  const inputContainer = {
    padding:"1rem",
    maxWidth:"15rem"
  }


  return (
    <div>
      <div style={inputContainer} className="flex-column">
        <input placeholder='Title' value={newTitle} onChange={handleNewTitle}></input>
        <input placeholder='Body' value={newBody} onChange={handleNewBody}></input>
        <button style={{cursor:"pointer"}} onClick={addData}>Create New</button>
      </div>
      <div style={tableContainer}>
        <div style={tableHeader}>
          <div>ID</div>
          <div>Title</div>
          <div>Body</div>
        </div>
        {
          sampleValue.map((obj,idx) => {
            return(
              <div key={idx} className="flex-row" style={tableRow}>
                <div style={tableCell}>
                  {obj.id}
                </div>
                <div style={tableCell}>
                  {obj.title}
                </div>
                <div style={tableCell}>
                  {obj.body}
                </div>
              </div>
            )
          })
        }
        {sampleValue.length === 0 && <div>Loading...</div>}
      </div>
    </div>
  )
}

export default APISample