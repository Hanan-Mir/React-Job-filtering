



function Filter({jobsView,setJobsView,data,setData,filterItem,setFilterItem}) {
 
  function handleCancel(item){
const filterSpans=filterItem.filter((el)=>el!==item);
setFilterItem(()=>filterSpans);
let viewData=data.filter((el)=>filterSpans.every((fl)=>el.filterBy.includes(fl)));
console.log(viewData);
setJobsView(viewData);
if(filterSpans.length===0){
  setJobsView(data);
}
}
  
    return (

        <div className="w-[100%] md:w-[100%] md:relative md:flex md:items-center md:justify-center flex justify-center">
            <div className="md:rounded-md md:w-[80%] md:h-[4rem] bg-white md:absolute md:top-[-1rem] md:flex md:items-center md:justify-start overflow-x-auto md:px-10 w-[80%] px-2 flex justify-start ml-2  flex-wrap">
                {filterItem.map((el)=>{
                   return <div className="flex h-[4rem] items-center  md:mr-6 md:rounded-md md:font-semibold md:text-gray-50 md:flex md:items-center md:justify-start ml-3">
                    <p className="hover:bg-gray-300 hover:text-black md:bg-gray-400 md:px-4 md:py-1 bg-gray-400 px-2 py-1 " >{el}</p>
                    <p className="bg-gray-600 md:text-2xl md:px-2 md:bg-gray-500 md:py-0 px-2 py-1 md:text-black" key={el} onClick={()=>handleCancel(el)}>&times;</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Filter
