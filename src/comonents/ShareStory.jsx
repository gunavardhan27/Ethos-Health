import { useState } from "react"
import TextArea from "./TextArea"
export default function ShareStory(){
    
    const [hint,setHint] = useState(true)
    function handleHints(){
        setHint(!hint)
    }
    return (
        <div className="mt-52 mr-20 ml-20 mb-40">
            <h1 className="text-3xl mb-6 flex items-center justify-center w-full font-bold">Share Your Story</h1>
            <h3 className="text-lg flex items-center justify-center">Your journey matters. By sharing your story, you can light</h3>
        <div className="w-full shadow-lg shadow-black flex items-center justify-center mt-10 p-10 ">
            <div className="flex flex-col w-full">
                <div className="flex items-end justify-end">
                    <button className="bg-[#858484] p-2 rounded-lg text-white hover:bg-[#E0EDF7] hover:text-black"
                    onClick={handleHints}>{hint ? 'Disable Hints' : 'Enable Hints'}</button>
                </div>                
                <form className="flex flex-col items-start w-full gap-4 basis-11/12">
                
                {hint ? <div className="w-full"><TextArea first={'Your starting point'} second={'Think back to when your mental health challenge began.What was happening in your life?'} 
                 third={'I first noticed I was struggling when..'}/>
                 <TextArea first={'The challenges you faced'} second={'What were the biggest obstacles you encountered?'} 
                 third={'The hardest part for me was..'}/>
                 <TextArea first={'Your turning point'} second={'Was there a moment when things started to change? What sparked the change?'} 
                 third={'Things began to improve when..'}/>
                 <TextArea first={'What helped you'} second={'What strategies, support, or resources made a difference for you?'} 
                 third={'I found help through...'}/>
                 <TextArea first={'Where are you now'} second={'How has your life changed? what does your journey look like today?'} 
                 third={'Now, I...'}/>

                <TextArea first={'Your message of hope'} second={'What would you say to someone facing similar changes'} 
                third={'To anyone struggling I want to know...'}/>
                </div> : <TextArea third={'Start here...'} />}
            </form>
            
           
            </div>
        </div>
    </div>
    )
}
 // <form className="flex flex-col items-start w-full gap-4 basis-11/12 h-24">
                {/*<div className='grid gird-cols-2 w-full'>
                <label htmlFor="data" className="mb-2">             
                </label>
            <textarea className=" bg-[#E0EDF7] h-20 p-2 text-[#858484]">
                Start Here...
            </textarea>
        </div>*/}
