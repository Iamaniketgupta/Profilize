import Hero from "./Hero";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import img3 from "../assets/img3.png";
import InfoBox from "./subComponents/InfoBox";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Button from "./subComponents/Button";
import FAQ from "./FAQ";
const Home = () => {
    return (
        <div className="relative">
            <Hero />

            <section className="w-[100vw]">
                <div className="my-[50px] ">
                    <h2 className="text-4xl text-center font-bold lg:text-5xl">
                        3 Steps to a perfect resume
                    </h2>
                </div>

                <div className="flex justify-evenly flex-wrap gap-7">

                    <InfoBox icon={icon1}
                        infoTitle={"Pick a template and follow the prompts"}
                        infoDesc={"Our builder will tailor your resume to the desired role once we know your details."}
                    />
                    <InfoBox icon={icon2}
                        infoTitle={"Choose customized text that fits your story"}
                        infoDesc={"The builder features professionally written content and keywords that you can select."}
                    />
                    <InfoBox icon={icon3}
                        infoTitle={"Download and send to employers"}
                        infoDesc={"Save and send as a PDF, Word DOC or any other file format the employer wants."}
                    />

                </div>

                <div className="my-16 text-center">
                    <Link to={"/editor"} className="m-auto inline-block min-w-[280px] h-fit py-4 px-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg font-bold text-xl text-white hover:to-orange-400">
                        Make a resume</Link>
                </div>
            </section>

            <section className=" bg-blue-600 p-10">
                <h1 className="text-3xl font-bold lg:text-5xl my-5 text-center py-4 leading-[3rem] text-white">
                    New Resume Templates Coming Soon!!
                </h1>
                <Slider />
            </section>


            <section>
                <div className="w-[100vw] flex items-center justify-center
        font-bold flex-wrap-reverse gap-10 p-[25px]">
                    <div className="leading-8 max-w-[600px] min-w-[300px] max-sm:text-center">
                        <p className="font-semibold text-orange-500">SECURE YOUR DREAM JOB
                        </p>
                        <h1 className="text-3xl lg:text-5xl my-5 leading-[3rem]">
                            Create a professional story in minutes. Use our cover letter maker.
                        </h1>
                        <p className="my-5 p-2">
                            Our Resume maker allows you to write amazing professional pitches in minutes rather than hours.
                            No more writer’s block, no more searching for the convincing phrases or agonizing over formatting. Be persuasive without effort!                            <br />
                        </p>
                        <Link to={"/editor"} >
                            <button type="button"
                                className="min-w-fit px-3 py-2 rounded-lg 
            bg-gradient-to-r from-indigo-500 to-orange-500 hover:from-indigo-600 hover:to-blue-400
             text-white font-bold shadow-md">
                                Get Started Now
                            </button>
                        </Link>

                    </div>
                    <div className="select-none max-w-[700px] min-w-[300px]">
                        <img src={img3} alt="" width={"100%"} height={"100%"} />
                    </div>
                </div>
            </section>

            <section className="my-10 p-5 mx-auto md:w-[85%]">
                <h1 className="text-3xl lg:text-5xl leading-[3rem] text-center my-5 font-bold ">
                    FAQs </h1>
                <FAQ />
            </section>

        </div >
    );
}

export default Home;
