import HomeReusableLayout from "../HomePageReusableCompo/HomeReusableLayout"
import HomeReusableCard from "../HomePageReusableCompo/HomeReusableCards"
import { FaLongArrowAltRight } from "react-icons/fa";


function Advantages(){
    return(
        <>
        <div className="  md:mt-[-20rem]">
        <HomeReusableLayout
        item1={<>Advantages</>}
        item2={<>Key Feature To Boots Your Productivity</>}
        item4={<>
            <HomeReusableCard 
              bgColor="bg-orange-100" 
              BoxColor="bg-white" 
              IconColor="" item1={"01"} 
              item2={<>To-Do-List</>} 
              item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>} 
              item4={<><div className="flex">Learn More <FaLongArrowAltRight className="mt-[0.4rem] ml-[0.2rem]"></FaLongArrowAltRight></div></>} 
              />
            <HomeReusableCard 
              bgColor="bg-yellow-50" 
              BoxColor="bg-white" 
              IconColor="" 
              item1={"02"} 
              item2={<>Semless Collabration</>} 
              item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>} 
              item4={<><div className="flex">Learn More <FaLongArrowAltRight className="mt-[0.4rem] ml-[0.2rem]"></FaLongArrowAltRight></div></>} 
              />
            <HomeReusableCard 
              bgColor="bg-purple-100"
              BoxColor="bg-white" 
              IconColor="" 
              item1={"03"} 
              item2={<>Semless Collabration</>} 
              item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>} 
              item4={<><div className="flex">Learn More <FaLongArrowAltRight className="mt-[0.4rem] ml-[0.2rem]"></FaLongArrowAltRight></div></>} 
              />   
        </>}
        ></HomeReusableLayout>
        </div>
        </>
    )
}
export default Advantages