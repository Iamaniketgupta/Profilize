import Hero from "./Hero";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import InfoBox from "./subComponents/InfoBox";
import { Link } from "react-router-dom";
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

        </div>
    );
}

export default Home;
