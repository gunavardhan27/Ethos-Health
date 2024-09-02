export default function TextArea({first,second,third}){
    console.log(third)
    return (
        <div className='grid gird-cols-2 w-full'>
            
            <p className="text-xl mb-2">{first}</p>
            <p className="text-md text-[#858484] mb-2">{second}</p>                    
        
            <textarea className=" bg-[#E0EDF7] h-20 p-2 text-[#858484]">
                {third}
            </textarea>
        </div>
    )
}