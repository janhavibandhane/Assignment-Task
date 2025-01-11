import HomeReusableLayout from "../HomePageReusableCompo/HomeReusableLayout"
import HomeReusableCard from "../HomePageReusableCompo/HomeReusableCards"
import { FaShareAlt } from "react-icons/fa";
import { RiApps2Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";

function Benefits(){
    return(
        <>
        <HomeReusableLayout
        item1={<>Benefits</>}
        item2={<>The Smart Choice For Your Team</>}
        item4={<>
            <HomeReusableCard bgColor="bg-base-100" BoxColor="bg-base-200" IconColor="text-purple-800" item1={<FaShareAlt />} item2={<>Semless Collabration</>} item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>} />
            <HomeReusableCard bgColor="bg-base-100" BoxColor="bg-base-200" IconColor="text-pink-600" item1={<RiApps2Fill />} item2={<>Semless Collabration</>} item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>}/>
            <HomeReusableCard bgColor="bg-base-100" BoxColor="bg-base-200" IconColor="text-yellow-400" item1={<IoSettingsSharp/>} item2={<>Semless Collabration</>} item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>}/>   
        </>}
        ></HomeReusableLayout>
        </>
    )
}
export default Benefits