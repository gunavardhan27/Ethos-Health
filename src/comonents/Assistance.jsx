export default function Support(){
    return (
        <div className="m-20">
            <h1 className="flex items-center justify-center text-[32px] font-bold m-10">Financial Assistance Request</h1>
            <p className="justify-center text-md text-[#858484] w-full bg-[#E0EDF7] rounded-md p-3
            ">We understand that sometimes, life can be overwhelming. It's okay to ask for help.</p>
            <div className="w-full shadow-lg shadow-black flex items-center justify-center mt-10 p-10">
                <form className="flex flex-col items-start w-full gap-4">
                <div className='grid gird-cols-2 w-full'>
                    <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
                      Your Name :
                    </label>
                    <input type='text' className='text-[#858484]  p-2 border border-gray-300 focus:outline-none bg-[#E0EDF7]' />
                </div>
                <div className="flex flex-col">
               <label htmlFor="options" className="text-gray-700 font-medium mb-2">
                Preferred Contact Method :
               </label>
               <select
                 id="options"
                    name="options"
                      className="p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 bg-[#E0EDF7] " >
                    <option value="" disabled selected>
                        Email
                       </option>
                      <option value="option1">Email</option>
                        <option value="option2">phone</option>
                    </select>
                 </div>
                 <div className='grid gird-cols-2 w-full'>
                    <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
                      How can we support you? :
                    </label>
                    <textarea className=" bg-[#E0EDF7] h-20 p-2 text-[#858484] ">

                    </textarea>
                </div>
                    
                 <div className='grid gird-cols-2 w-full'>
                    <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
                      Share your story if you are comfortable
                    </label>
                    <textarea maxLength={3000} className=" bg-[#E0EDF7] h-20 text-[#858484] p-2" defaultValue={'Please share anything you feel is important for us to know...'}>

                    </textarea>
                </div>
                <div className="flex flex-row items-center justify-center gap-7 w-full mt-16 text-white">
                    <input type='button' value={'Save Progress'} className="bg-blue-400 p-3 w-[217px] h-[49px] rounded-sm" />
                    <input type="submit" value='submit' className="bg-blue-400 p-3 w-[217px] h-[49px] rounded-sm" />
                </div>
                </form>
            </div>
        </div>
    )
}