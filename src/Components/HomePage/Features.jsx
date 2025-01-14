import HomeReusableCard from "../HomePageReusableCompo/HomeReusableCards";
import HomeReusableLayout from "../HomePageReusableCompo/HomeReusableLayout";
import { FaParachuteBox } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { FaTasks } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";

function Features() {
    return (
      <>
        <HomeReusableLayout
          Css="flex flex-row"
          item1={<>Features</>}
          item2={<>Powerful Features To Elevate Your Workflow</>}
          item4={
            <>
              <div className="flex flex-wrap  justify-center gap-4  overflow-x-scroll ">
                <div className=" ">
                  <HomeReusableCard
                    bgColor="bg-base-100 hover:border hover:border-pink-500 hover:bg-pink-50 w-full w-64 md:w-80 h-auto"
                    BoxColor="bg-base-200"
                    IconColor="text-green-500"
                    item1={<FaParachuteBox />}
                    item2={<>Make Smart Decisions</>}
                    item3={
                      <>
                        Lorem, ipsum dol accusamus dignissimos odit voluptas
                        dolores mollitia quo perferendis accusantium omnis
                        blanditiis deserunt cum?
                      </>
                    }
                  />
                </div>
                <div className="">
                  <HomeReusableCard
                    bgColor="bg-base-100 hover:border hover:border-pink-500 hover:bg-pink-50 w-full w-64 md:w-80 h-auto"
                    BoxColor="bg-base-200"
                    IconColor="text-pink-600"
                    item1={<GoGoal />}
                    item2={<>Optimize Your Goals</>}
                    item3={
                      <>
                        Lorem, ipsum dol accusamus dignissimos odit voluptas
                        dolores mollitia quo perferendis accusantium omnis
                        blanditiis deserunt cum?
                      </>
                    }
                  />
                </div>
                <div className="">
                  <HomeReusableCard
                    bgColor="bg-base-100 hover:border hover:border-pink-500 hover:bg-pink-50 w-full w-64 md:w-80 h-auto"
                    BoxColor="bg-base-200"
                    IconColor="text-purple-400"
                    item1={<FaTasks />}
                    item2={<>Task Management</>}
                    item3={
                      <>
                        Lorem, ipsum dol accusamus dignissimos odit voluptas
                        dolores mollitia quo perferendis accusantium omnis
                        blanditiis deserunt cum?
                      </>
                    }
                  />
                </div>
                {/* <div className="">
                  <HomeReusableCard
                    bgColor="bg-base-100 hover:border hover:border-pink-500 hover:bg-pink-50 w-full w-64 md:w-80 h-auto"
                    BoxColor="bg-base-200"
                    IconColor="text-yellow-400"
                    item1={<IoChatbox />}
                    item2={<>Team Chat</>}
                    item3={
                      <>
                        Lorem, ipsum dol accusamus dignissimos odit voluptas
                        dolores mollitia quo perferendis accusantium omnis
                        blanditiis deserunt cum?
                      </>
                    }
                  />
                </div> */}
              </div>
            </>
          }
        ></HomeReusableLayout>
      </>
    );
  }
  
  export default Features;
  

