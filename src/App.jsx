import { useEffect, useState } from "react"
import Loader from "./components/Loader";
import JobCard from "./components/JobCard";
import Heading from "./components/Heading";
import Filter from "./components/Filter";
function App() {
  const [data,setData]=useState();
  const [filter,setFilter]=useState(false);
  const [filterItem,setFilterItem]=useState([]);
  const [jobsView,setJobsView]=useState();
  useEffect(function(){
setJobsView(data);
  },[data]);
  //effect to get the data initially
 useEffect(function(){
  async function getData(){
    try{
const fetchData=await fetch(`/data.json`);
const res=await fetchData.json();
res.forEach((el)=>{
  console.log(el);
  let tools=el.tools.length>0? el.tools:'NA';
  console.log(tools);
 el.filterBy=[...el.languages,el.level,el.role,...tools]
})
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
      {filter &&filterItem.length>0 && <Filter jobsView={jobsView} setJobsView={setJobsView} data={data} setData={setData} filterItem={filterItem} setFilterItem={setFilterItem}/>}
      <div className="flex flex-col items-center justify-center pb-6">
     {jobsView?.map((job)=>{
      return <JobCard jobsView={jobsView} setJobsView={setJobsView} data={data} setData={setData} job={job} setFilter={setFilter} filterItem={filterItem} setFilterItem={setFilterItem} />
     })}
    </div>
    </div>
  )
}

export default App
