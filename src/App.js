import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './Plan';
import { useState } from 'react';


function App() {

  const [text, setText] = useState("")
  const [items, setItems] = useState([])

  const handleChange = (e) => {
    console.log('onchange');
    setText(e.target.value);
    console.log(text)
  }
  const handleAdd = () => {
    if (text !== "") {
      setItems([...items, text]);
      setText("")
    }
  }

  const handleDelete = (id) => {
    console.log("Delete Id :", id)
    const olditems = [...items]
    console.log("Old Items :", olditems)
    const newitems = olditems.filter((element,i)=>  { return i !== id})
    setItems([...newitems])
  }

  return (
    <div className='container-fluid my-5'>
      <div className='row'>
        <div className='col-sm-6 mx-auto text-white shadow-lg p-3'>
          <h2 className='text-center '>Today's Plan</h2>
            <div className='row'>
            <div className='col-9'>
              <input type='text' className='form-control' placeholder='Write Plan Here' value={text} onChange={handleChange}/>
            </div>
            <div className='col-2'>
              <button  onClick={handleAdd} className='btn btn-warning px-5 fw-bold'>Add </button>
            </div>
          </div>
            <div className='container-fluid'>
                <ul className='row m-5 list-unstyled'>
                  {console.log('Items Array is :',items)}
                      {items.map((value, i)=>{
                        return <Plan key={i} id={i} deldata={handleDelete} value={value} />
                      })}
                </ul>
            </div>

        </div>
      </div>

    </div>
  );
}

export default App;
