import HomeReusableCard from "../HomePageReusableCompo/HomeReusableCards";
import HomeReusableLayout from "../HomePageReusableCompo/HomeReusableLayout";
import { FaSpotify } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import { SiVerizon } from "react-icons/si";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoHammer } from "react-icons/io5";

function Pricing() {
  return (
    <>
      <div className="mt-10">
        <HomeReusableLayout
          item1={"Pricing"}
          item2={"Flexible plans for every team"}
          item4={
            <>
              <div className=" flex flex-col justify-cente items-center">
                <div className=" flex ">
                  <p className=" mr-2 font-semibold text-slate-500">Monthly</p>
                  <input
                    type="checkbox"
                    value="synthwave"
                    className="toggle theme-controller bg-green-400 hover:bg-green-400"
                  />
                  <p className=" ml-2 font-semibold">Anuualy 20% off</p>
                </div>
                <div className=" lg:flex lg:flex-row flex flex-col gap-6">
                  <HomeReusableCard
                    BoxColor="bg-base-200"
                    bgColor="lg:h-96"
                    item1={<IoHammer className="text-3xl text-blue-600" />}
                    item2={"Starter Plan"}
                    item3={
                      <div className="mt-[-1rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </div>
                    }
                    item4={
                      <div className="">
                        <div className=" text-2xl mt-[1rem]">FREE</div>
                        <div className="font-normal text-[0.8rem] space-y-1">
                          <p className=" flex">
                            <SiVerizon className="mt-1 mr-1 text-purple-500"></SiVerizon>
                            Task Management Tools
                          </p>
                          <p className=" flex">
                            <SiVerizon className="mt-1 mr-1 text-purple-500"></SiVerizon>
                            Task Management Tools
                          </p>
                          <p className=" flex">
                            <SiVerizon className="mt-1 mr-1 text-purple-500"></SiVerizon>
                            Task Management Tools
                          </p>
                          <p className=" flex">
                            <SiVerizon className="mt-1 mr-1 text-purple-500"></SiVerizon>
                            Task Management Tools
                          </p>
                        </div>
                        <button className="btn btn-wide mt-5">Wide</button>
                      </div>
                    }
                  ></HomeReusableCard>
                  <HomeReusableCard
                    BoxColor="bg-base-200"
                    bgColor="lg:h-96"
                    item1={
                      <BsFillAirplaneEnginesFill className="text-2xl text-purple-600" />
                    }
                    item2={"Pro Plan"}
                    item3={
                      <div className="mt-[-1rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </div>
                    }
                    item4={
                      <div className="">
                        <div className=" text-2xl mt-[1rem]">$19</div>
                        <div className="font-normal text-[0.8rem] space-y-1">
                          <p className=" flex">
                            <SiVerizon className="mt-1 mr-1 text-purple-500"></SiVerizon>
                            Task Management Tools
                          </p>
                          <p className=" flex">
                            <SiVerizon className="mt-1 mr-1 text-purple-500"></SiVerizon>
                            Task Management Tools
                          </p>
                          <p className=" flex">
                            <SiVerizon className="mt-1 mr-1 text-purple-500"></SiVerizon>
                            Task Management Tools
                          </p>
                          <p className=" flex">
                            <SiVerizon className="mt-1 mr-1 text-purple-500"></SiVerizon>
                            Task Management Tools
                          </p>
                        </div>
                        <button className="btn btn-wide mt-5 bg-purple-700 text-white">
                          Wide
                        </button>
                      </div>
                    }
                  ></HomeReusableCard>
                  <HomeReusableCard
                    BoxColor="bg-base-200"
                    bgColor="lg:h-96"
                    item1={
                      <HiOutlineMailOpen className="text-2xl text-yellow-500" />
                    }
                    item2={"Enterprise Plan"}
                    item3={
                      <div className="mt-[-1rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </div>
                    }
                    item4={
                      <div className="">
                        <div className=" text-2xl mt-[1rem]">$49</div>
                        <div className="font-normal text-[0.8rem] space-y-1">
                          <p className=" flex">
                            <SiVerizon className="mt-1 mr-1 text-purple-500"></SiVerizon>
                            Task Management Tools
                          </p>
                          <p className=" flex">
                            <SiVerizon className="mt-1 mr-1 text-purple-500"></SiVerizon>
                            Task Management Tools
                          </p>
                          <p className=" flex">
                            <SiVerizon className="mt-1 mr-1 text-purple-500"></SiVerizon>
                            Task Management Tools
                          </p>
                          <p className=" flex">
                            <SiVerizon className="mt-1 mr-1 text-purple-500"></SiVerizon>
                            Task Management Tools
                          </p>
                        </div>
                        <button className="btn btn-wide mt-5">Wide</button>
                      </div>
                    }
                  ></HomeReusableCard>
                </div>
              </div>
            </>
          }
        ></HomeReusableLayout>
      </div>
    </>
  );
}
export default Pricing;
