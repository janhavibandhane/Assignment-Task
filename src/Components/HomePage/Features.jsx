import HomeReusableCard from "../HomePageReusableCompo/HomeReusableCards"
import HomeReusableLayout from "../HomePageReusableCompo/HomeReusableLayout"
function Features(){
    return(
        <>
        <HomeReusableLayout
        item1={<>Benefits</>}
        item2={<>The Smart Choice For Your Team</>}
        item4={<>
            <HomeReusableCard bgColor="bg-base-100" BoxColor="bg-base-200" IconColor="text-purple-800" item1={""} item2={<>Semless Collabration</>} item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>} />
            <HomeReusableCard bgColor="bg-base-100" BoxColor="bg-base-200" IconColor="text-pink-600" item1={<></>} item2={<>Semless Collabration</>} item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>}/>
            <HomeReusableCard bgColor="bg-base-100" BoxColor="bg-base-200" IconColor="text-yellow-400" item1={<></>} item2={<>Semless Collabration</>} item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>}/>
            <HomeReusableCard bgColor="bg-base-100" BoxColor="bg-base-200" IconColor="text-yellow-400" item1={<></>} item2={<>Semless Collabration</>} item3={<>Lorem, ipsum dol accusamus dignissimos odit voluptas dolores mollitia quo perferendis accusantium omnis blanditiis deserunt cum?</>}/>   
   
        </>}
        ></HomeReusableLayout>
        </>
    )
}
export default Features