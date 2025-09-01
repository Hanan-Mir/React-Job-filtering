

function Filter({filterItem,setFilterItem}) {
  function handleCancel(item){
const newItems=filterItem.filter((el)=>el!==item);
setFilterItem(newItems)

  }
    return (

        <div className="w-[100%] md:relative md:flex md:items-center md:justify-center">
            <div className="md:rounded-md md:w-[80%] md:h-[4rem] bg-white md:absolute top-[-1rem] md:flex md:items-center md:justify-start overflow-x-auto md:px-10">
                {filterItem.map((el)=>{
                   return <div className=" md:mr-6 md:rounded-md md:font-semibold md:text-gray-50 md:flex md:items-center md:justify-start">
                    <p className="md:bg-gray-400 md:px-4 md:py-1 " >{el}</p>
                    <p className="md:text-2xl md:px-2 md:bg-gray-500 md:py-0 md:text-black" key={el} onClick={()=>handleCancel(el)}>&times;</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Filter
