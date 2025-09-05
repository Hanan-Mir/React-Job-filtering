import { useEffect, useState } from "react";

function JobCard({jobsView,setJobsView,data,setData,job,setFilter,filterItem,setFilterItem}) {

   
    //function to convert the day string into real days
    function convertToDays(days){
const match=days?.match(/(\d+)\s*([a-z]+)s?\s*ago/i);
if(match){
const value=parseInt(match[1]);
const abbrevations=match[2].toLowerCase();
const daysMap={
    'd': 'day',
      'hr': 'hour',
      'mo': 'month',
      'yr': 'year',
      'min': 'minute',
      'sec': 'second',
      'week': 'week',
}
const unit=daysMap[abbrevations] || abbrevations;
return {value,unit}
}
else{
    return null
}
    }
    function handleFilter(event){
        if(event.target.tagName==='SPAN'){
            const text=event.target.textContent;
            setFilter(true);
            if(filterItem.includes(text)) return;
            setFilterItem((pre)=>[...pre,text]);
            const filterList=jobsView.filter((el)=>{
                if(el?.languages.includes(text) ||el?.tools.includes(text) || el?.role===text ||el?.level===text){
                    return el
                }
            })
          setJobsView(filterList);  
         
            

        }
    } 
    return (
        <div className=" md:flex  md:justify-between  md:h-[20vh] relative bg-white w-[80%] mt-[4rem] h-[42vh] rounded-lg border-l-8 border-l-gray-500">
            
            
            <div className="md:flex md:justify-between md:items-center md:w-[100%] md:flex-row">
                     <img className="absolute top-0 left-3 translate-y-[-50%] md:translate-y-[18%] md:mr-[1rem] md:static md:w-[12%] md:h-[60%]" src={job?.logo} />
                <div className="pt-12 md:flex md:justify-between md:w-[100%]">
                    
                    <div>
                <div className="flex justify-start items-center">
                <h1 className="text-[1.2rem] font-semibold text-gray-400 m-2">{job?.company}</h1>
                {convertToDays(job?.postedAt)?.value <=2 && convertToDays(job?.postedAt)?.unit==='day' &&
                 <div className="flex ml-[10%] items-center justify-center">
                <span className="mr-[12%] bg-gray-400 text-white rounded-[2rem] px-3 py-1">NEW!</span>
               {convertToDays(job?.postedAt).value===1 && convertToDays(job?.postedAt).unit==='day' && <span className="bg-green-950 rounded-[2rem] text-white font-semibold px-2 py-1 ">FEATURED</span>}
                </div>

                }
                </div>
             <h1 className="font-bold text-[1.2rem] m-2">{job?.position}</h1>
             <div className="flex items-center m-2 font-semibold text-gray-400">
                <h2 className="mr-[1.4rem]">{job?.postedAt}</h2>
                <ul className="flex items-center list-disc">
                    <li className="mr-[1.8rem]">{job?.contract}</li>
                    <li>{job?.location}</li>
                </ul>
                </div>
                </div>
              
            

               <div>
                <div className="w-[100%] flex justify-center md:hidden ">
                    <p className="w-[90%] h-[1px] bg-gray-500"></p>
                </div>
                <div className="mt-[2.5rem] ml-2 flex flex-wrap gap-y-4 text-[1rem] md:w-[100%] " onClick={(e)=>handleFilter(e)}>
            <span className="hover:bg-gray-400 mr-[2rem] bg-gray-500 text-white font-semibold px-3 py-2 rounded-lg">{job?.role}</span>
            <span className="hover:bg-gray-400 mr-[2rem] bg-gray-500 text-white font-semibold px-3 py-2 rounded-lg">{job?.level}</span>
           
        
            {job?.languages.map(lng=><span className="hover:bg-gray-400 mr-[2rem]  bg-gray-500 text-white font-semibold px-3 py-2 rounded-lg">{lng}</span>)}
           { job?.tools.length>0 && job?.tools.map(el=>{
 return <span className="hover:bg-gray-400 mr-[2rem] bg-gray-500 text-white font-semibold px-3 py-2 rounded-lg">{el}</span>
           }) }
            </div>
            </div>
        </div>
        </div>
        </div>
      
        
    )
}

export default JobCard
