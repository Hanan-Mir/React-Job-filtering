import { useEffect, useState } from "react"
import Loader from "./components/Loader";
import JobCard from "./components/JobCard";
import Heading from "./components/Heading";
import Filter from "./components/Filter";
function App() {
  const [data,setData]=useState();
  const [filter,setFilter]=useState(false);
  const [filterItem,setFilterItem]=useState([]);
  //effect to get the data initially
 useEffect(function(){
  async function getData(){
    try{
const fetchData=await fetch(`/data.json`);
const res=await fetchData.json();
console.log(res);
if(!fetchData.ok) throw new Error("There is some problem while fetching the data")
setData(res);
    } catch(error){
      console.log(error)
    }

}
  getData()
 },[])
 //if no data
if(!data){
  return <Loader />
}
  return (
    <div>
      <Heading />
      {filter &&filterItem.length>0 && <Filter filterItem={filterItem} setFilterItem={setFilterItem}/>}
      <div className="flex flex-col items-center justify-center pb-6">
     {data.map((job)=>{
      return <JobCard job={job} setFilter={setFilter} filterItem={filterItem} setFilterItem={setFilterItem} />
     })}
    </div>
    </div>
  )
}

export default App
