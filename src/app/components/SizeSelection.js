import Image from "next/image";


const SizeSelection = ({pizza,size,setSize}) => {

  return <div className="mx-auto max-w-sm lg:max-w-none flex items-center justify-center lg:justify-start">
    <div className="flex gap-x-12 items-baseline mb-10 font-medium">
      <label className=" flex flex-col items-center gap-x-2 cursor-pointer">
        <Image className={`mb-1${size==='small'?"border-2 border-orange p-[2px] rounded-full":"border-transparent filter sature-[.1]"}`} src={pizza.image} width={60} height={60} alt=''/>
        <input
        type="radio"
        name="size"
        value='small'
        checked={size==='small'}
        onChange={(e)=>setSize(e.target.value)}
        className="appearance-none"
        
        ></input>
        Small
      </label>
      <label className=" flex flex-col items-center gap-x-2 cursor-pointer">
        <Image className={`mb-1${size==='medium'?"border-2 border-orange p-[2px] rounded-full":"border-transparent filter sature-[.1]"}`} src={pizza.image} width={70} height={70} alt=''/>
        <input
        type="radio"
        name="size"
        value='medium'
        checked={size==='medium'}
        onChange={(e)=>setSize(e.target.value)}
        className="appearance-none"
        
        ></input>
        Medium
      </label>
      <label className=" flex flex-col items-center gap-x-2 cursor-pointer">
        <Image className={`mb-1${size==='large'?"border-2 border-orange p-[2px] rounded-full":"border-transparent filter sature-[.1]"}`} src={pizza.image} width={80} height={80} alt=''/>
        <input
        type="radio"
        name="size"
        value='large'
        checked={size==='large'}
        onChange={(e)=>setSize(e.target.value)}
        className="appearance-none"
        
        ></input>
        Large
      </label>
    </div>
  </div>;
};

export default SizeSelection;
