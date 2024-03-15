import ToolBar from "./ToolBar";
import { useEffect, useRef, useState } from "react";
import PersonalDetails from "./sections/PersonalDetails";
import WorkExperience from "./sections/WorkExperience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Achievments from "./sections/Achievments";
import Skills from "./sections/Skills";
import Others from "./sections/Others";
import { resData } from "../data/resumeData";
import { sections } from "../data/sections";
import ResumePage from "./ResumePage";
import { useReactToPrint } from "react-to-print";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Editor = () => {


    const colors = ["#000000", "#c33434", "#5a2e7c", "#2a678d"]

    const [selectedColor, setSelectedColor] = useState(() => {
        const storedColor = localStorage.getItem("resumeColor");
        return storedColor ? storedColor : colors[0];
    });

    // state for the tabs
    const [activeSection, setActiveSection] = useState(Object.keys(sections)[0]);

    // state to have the main data values
    const [resumeInfo, setResumeInfo] = useState(() => {
        const storedData = localStorage.getItem("resumeData");
        return storedData ? JSON.parse(storedData) : resData;
    });

    //state to track current section object
    const [currValues, setCurrValues] = useState({ ...resumeInfo[activeSection] })

    // Update local storage when resume data changes
    useEffect(() => {
        localStorage.setItem("resumeData", JSON.stringify(resumeInfo));
    }, [resumeInfo]);


    const myref = useRef(null);

    function handleSave(e) {
        e.preventDefault();
        setResumeInfo((prev) => {
            const currSection = activeSection;
            return {
                ...prev,
                [currSection]: {
                    ...currValues
                }
            }
        });
    }

    function handleTitleChange(e) {
        const titleVal = e.target.value
        setCurrValues((prev) => ({ ...prev, title: titleVal }))
    }


    function tabChange(key) {
        setActiveSection(key);
        setCurrValues(resumeInfo[key]);
    }

    console.log(resumeInfo)
    return (
        <div className="relative w-screen bg-white ">
            <ToolBar colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor}></ToolBar>
            <div className=" w-full flex flex-wrap gap-5">
                <div className="flex flex-col w-full min-w-300px max-w-[600px]">
                    {/* Tabs */}
                    <div className="flex gap-3 m-4 flex-wrap">
                        {(Object.keys(sections)).map((key) => {
                            return <div key={key} onClick={() => tabChange(key)} className={`${(activeSection === key) ? 'bg-gradient-to-r from-pink-400 to-orange-300 border-0 text-white' : "bg-white-300 text-slate-700 hover:bg-slate-00"}  p-2 px-3 select-none hover:bg-border-300 border-2 rounded-lg cursor-pointer  font-semibold`}>{sections[key]}</div>
                        })}
                    </div>
                    <div>

                        {activeSection === "personal_details" && (
                            <div>
                                <PersonalDetails
                                    handleSave={handleSave}
                                    handleTitleChange={handleTitleChange}
                                    setCurrValues={setCurrValues}
                                    currValues={currValues}
                                />
                            </div>
                        )
                        }

                        {activeSection === "work_experience" &&
                            (<div>
                                <WorkExperience
                                    handleSave={handleSave}
                                    handleTitleChange={handleTitleChange}
                                    setCurrValues={setCurrValues}
                                    currValues={currValues}
                                /></div>)}

                        {activeSection === "education" && (
                            <div>
                                <Education
                                    handleSave={handleSave}
                                    handleTitleChange={handleTitleChange}
                                    setCurrValues={setCurrValues}
                                    currValues={currValues}
                                /></div>)}

                        {activeSection === "projects" && (
                            <div>
                                <Projects
                                    handleSave={handleSave}
                                    handleTitleChange={handleTitleChange}
                                    setCurrValues={setCurrValues}
                                    currValues={currValues} />
                            </div>)}

                        {activeSection === "achievments" && (
                            <div>
                                <Achievments
                                    handleSave={handleSave}
                                    handleTitleChange={handleTitleChange}
                                    setCurrValues={setCurrValues}
                                    currValues={currValues} />
                            </div>)}

                        {activeSection === "skills" && (
                            <div>
                                <Skills
                                    handleSave={handleSave}
                                    handleTitleChange={handleTitleChange}
                                    setCurrValues={setCurrValues}
                                    currValues={currValues}
                                /></div>)

                        }

                        {activeSection === "other" && (<div>
                            <Others
                                handleSave={handleSave}
                                handleTitleChange={handleTitleChange}
                                setCurrValues={setCurrValues}
                                currValues={currValues}
                            /></div>)}

                    </div>

                </div>

                <div className=" max-w-[850px] rounded-md shadow-md max-h-[1100px] w-screen min-w-[300px] ">
                    <div className=" bg-gradient-to-r from-pink-100 to-orange-200 p-0 border-2 ">
                        <div className="w-fit bg-gradient-to-r from-pink-700 to-blue-600 rounded-3xl p-[1.5px] m-3">
                            <button onClick={useReactToPrint({
                                content: () => myref.current,
                            })}
                                className=' min-w-15 min-h-fit px-10 py-2 inline-block
                    bg-gradient-to-l from-orange-400 to-yellow-400 rounded-3xl text-white font-semibold'>Download</button>
                            <FaCloudDownloadAlt size={30} className="animate-bounce text-white inline-block mx-2" />
                        </div>
                    </div>

                    {/* RESUME SECTION */}
                    <ResumePage resumeInfo={resumeInfo} selectedColor={selectedColor} ref={myref} />
                </div>

            </div>

            
            </div>
    );
}

export default Editor;
