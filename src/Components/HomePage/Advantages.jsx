import HomeReusableLayout from "../HomePageReusableCompo/HomeReusableLayout"
import HomeReusableCard from "../HomePageReusableCompo/HomeReusableCards"
import { FaShareAlt } from "react-icons/fa";
import { RiApps2Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";

function Advantages(){
    return(
        <>
        <HomeReusableLayout
        item1={<>Advantages</>}
        item2={<>Key Feature To Boots Your Productivity</>}
        item4={<>
            <HomeReusableCard bgColor="bg-orange-100" BoxColor="bg-white" IconColor="" item1={"01"} item2={<>To-Do-List</>} item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>} />
            <HomeReusableCard bgColor="bg-yellow-50" BoxColor="bg-white" IconColor="" item1={"02"} item2={<>Semless Collabration</>} item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>}/>
            <HomeReusableCard bgColor="bg-purple-100"BoxColor="bg-white" IconColor="" item1={"03"} item2={<>Semless Collabration</>} item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>}/>   
        </>}
        ></HomeReusableLayout>
        </>
    )
}
export default Advantages