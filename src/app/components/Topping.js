import Image from "next/image";
import { useState,useEffect } from "react";
import {IoMdCheckmark} from 'react-icons/io'


const Topping = ({topping,additionalTopping,setAdditionalTopping}) => {
  const[isChecked,setIsChecked] = useState(false)

useEffect(()=>{
  if(isChecked){
    const newTopping = new Set([...additionalTopping,{...topping}])
    setAdditionalTopping(Array.from(newTopping))

   }
   else{
    const newTopping = additionalTopping.filter((toppingObj)=>{return toppingObj.name!==topping.name})
    setAdditionalTopping(newTopping)
   }

},[isChecked])
  return <div
  className={`${isChecked&&'border-orange'} w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}
  >
<Image src={topping.image} height={70} width={70} alt='' className="mb-2"/>
<div className="text-sm capitalize text-center font-medium">
  {topping.name}
</div>
<input className="absolute w-full h-full opacity-0 cursor-pointer" type="checkbox" onChange={()=>setIsChecked(!isChecked)} checked={isChecked}/>
<div className={`${isChecked?'opacity-100':'opacity-0'} absolute top-1 right-1`}><IoMdCheckmark className="text-xl text-orange"/></div>
  </div>
};

export default Topping;
 