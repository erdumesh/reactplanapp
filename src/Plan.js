function Plan({id, deldata, value}){
    return <>
    <li className="shadow p-2 my-2 col-sm-9">{value}</li>
    <button onClick={()=>deldata(id)} className="btn btn-danger offset-1 col-sm-2"
    >Delete</button>
    </>
}

export default Plan;
