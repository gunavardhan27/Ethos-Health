import { fadeIn } from '../variant'
import mentalhealth from './../../assets/images/mental-health.jpg'
import mission from './../../assets/images/mission.jpg'
import plan from './../../assets/images/plan.jpg'
import {motion} from 'framer-motion'
const AboutUs = () => {
  return (
<div className="w-full flex flex-col items-center justify-center p-20 gap-5" id="#about">

         <div className="first-section flex  h-full p-20 mb-10">
             <div
             className="left w-1/2 flex-col">
            <motion.div
             variants={fadeIn("right",0.2)}
             initial="hidden"
             whileInView={"show"} className="title text-transform: uppercase text-3xl font-[Poppins] font-bold mb-5">A journey towards a kinder world</motion.div>
            <motion.div
             variants={fadeIn("down",0.2)}
             initial="hidden"
             whileInView={"show"} className="content text-xl font-[Montserrat]">
               In a chaotic world, we chose to take a step towards creating a kinder, more compassionate future. We believe in the power of small actions to spark profound change. If you've ever felt the weight of the world and longed for a gentler place, you're not alone—this is where our journey began.
           </motion.div>
           </div>
             <motion.div
             variants={fadeIn("left",0.2)}
             initial="hidden"
             whileInView={"show"} className="right w-1/2">
              <img src={mentalhealth} className='object-cover rounded-3xl' alt="inspiration"/>
             </motion.div>
            
         </div>
         <div className="second-section flex  h-full p-20 ">
             <motion.div
             variants={fadeIn("down",0.2)}
             initial="hidden"
             whileInView={"show"} className="right w-1/2">
             <img src={mission} className='object-cover rounded-3xl' alt="mission" />
             </motion.div>
             <div className="left w-1/2 flex-col p-5">
             <motion.div
             variants={fadeIn("right",0.2)}
             initial="hidden"
             whileInView={"show"} className="title text-transform: uppercase text-3xl font-[Poppins] font-bold mb-5 ">Our mission: to build a world where empathy is the foundation, and kindness is the norm.
             </motion.div>
             <motion.div
             variants={fadeIn("up",0.2)}
             initial="hidden"
             whileInView={"show"} className="content text-xl font-[Montserrat]">
             We are a collective of hearts and minds, united by a shared vision of making life a little gentler for everyone. We recognize that change begins with understanding, and understanding begins with empathy. If you’ve ever felt the weight of the world and wished for a kinder place, then you already understand our mission.
             </motion.div>
             </div>          
         </div>
         <div className=" third-section flex   p-20 gap-5 h-screen">
             <div className="left w-1/2">
             <motion.div
             variants={fadeIn("right",0.2)}
             initial="hidden"
             whileInView={"show"} className="title text-transform: uppercase text-3xl font-[Poppins] font-bold mb-5">Our Plan
             </motion.div>
             <motion.div
             variants={fadeIn("down",0.2)}
             initial="hidden"
             whileInView={"show"} className="content text-xl font-[Montserrat]">
             We can't do this alone. We need you—every kind heart, every willing hand, every empathetic soul. Whether you’ve faced struggles and want to give back, or you have a unique skill that could help us along the way, your contribution matters.
 If you are someone who has walked through fire and come out with a heart full of empathy, we invite you to join us as we create a supportive community for those in distress. If you have the technical skills to help us build our platform or the mental health expertise to guide our mission, we welcome you to be part of this journey.
 But more than titles and expertise, what we need are people who believe in the power of kindness. It doesn’t matter if you’re a developer, a storyteller, a therapist, or simply someone who cares—there is a place for you here. Together, we’re not just building a platform; we’re nurturing a movement towards a more compassionate world.
           </motion.div>
             </div>
             <motion.div
             variants={fadeIn("left",0.2)}
             initial="hidden"
             whileInView={"show"} className="right w-1/2 h-full ">
              <img src={plan} alt="plan" className='object-cover h-full w-full rounded-3xl'/>
             </motion.div>
            
         </div>
    </div>
  )
}

export default AboutUs