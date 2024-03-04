import { Link } from "react-router-dom";
import heroImg from "../assets/heroImg.png";
import Button from "./subComponents/Button";
const Hero = () => {
    return (
        <div className="w-[100vw] flex items-center justify-center
        font-bold flex-wrap-reverse gap-10 p-[25px]">
            <div className="leading-8 max-w-[600px] min-w-[300px]">
                <h1 className="text-4xl lg:text-5xl my-5 leading-[3rem]">
                    Free Online Resume Builder: Make Yours in Minutes</h1>
                <p className="my-5">
                    Create a job-winning professional resume easily, or update your existing document.
                    <br />
                    Our builder features 30+ resume templates, step-by-step guidance and endless customizable content options
                </p>
                <Link to={"/editor"} >
                 <Button/>
                </Link>

            </div>
            <div className="select-none max-w-[700px] min-w-[300px]">
            <img src={heroImg} alt="" width={"100%"} height={"100%"}/>
            </div>
        </div>
    );
}

export default Hero;
