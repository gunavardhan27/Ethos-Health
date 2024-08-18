import image from '../assets/dn.png'
import DropDown from './DropDown'
export default function Donations(){
    return (
        <div className='pt-28'>
            <h1 className='flex items-center justify-center text-3xl font-bold mb-3'>Support the Cause: Your Contribution Makes a Difference</h1>
            <p className='flex items-center justify-center'>Your genorsity can change lives. Every peny you donate goes directly to funding mental health treatments for those in need. </p>
            <div className="flex flex-row justify-center items-center w-[94%] mt-16">
                <form className='flex basis-2/3'>
                <div className='flex flex-row items-center justify-center w-full'>
                    <div className='flex basis-1/2 flex-col items-center justify-between gap-6'>
                    <div className='grid gird-cols-2'>
                    <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
                      Your Name :
                    </label>
                    <input type='text' className='p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2
                       focus:ring-blue-500' />
                    </div>
                    <div className='grid gird-cols-2'>
                    <label htmlFor="phone" className="mb-2 text-gray-700 font-medium">
                      Telephone :
                    </label>
                    <input type='tel' className='p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2
                       focus:ring-blue-500' />
                    </div>
                    <div className='grid gird-cols-2'>
                    <label htmlFor="donate" className="mb-2 text-gray-700 font-medium">
                      Donation Amount :
                    </label>
                    <input type='text' className='p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2
                       focus:ring-blue-500' />
                    {/*<DropDown />*/}
                    </div>
                    </div>
                    <div className='flex basis-1/2 flex-col items-center justify-start gap-6'>
                    <div className='grid gird-cols-2'>
                    <label htmlFor="email" className="mb-2 text-gray-700 font-medium">
                      Email :
                    </label>
                    <input type='email' className='p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2
                       focus:ring-blue-500' />
                    </div>
                    <div className='grid gird-cols-2'>
                    <label htmlFor="phone" className="mb-2 text-gray-700 font-medium">
                      Donation Payment :
                    </label>
                    <input type='text' className='p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2
                       focus:ring-blue-500' />
                    </div>
                    <div className='grid gird-cols-2'>
                    <label htmlFor="phone" className="mb-2 text-gray-700 font-medium">
                      Payment Method :
                    </label>
                    <input type='text' className='p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2
                       focus:ring-blue-500' />
                    </div>
                    </div>
                </div>
                
                </form>
                <img src={image} className='h-[425px] w-[314px] flex basis-1/3' />
            </div>
        </div>
    )
}