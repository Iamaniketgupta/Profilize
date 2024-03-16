/* eslint-disable react/prop-types */
import { forwardRef, useEffect } from "react";
import { useState } from "react";
import { sampleTemplateData } from "../data/templateSample";

const ResumePage = forwardRef(function ResumePage(props, ref) {
    const { resumeInfo, selectedColor } = props;

    const [data, setData] = useState(sampleTemplateData);

    const [color, setColor] = useState(selectedColor);

    useEffect(() => {
        setData(resumeInfo)
    }, [resumeInfo])


    useEffect(() => {
        localStorage.setItem("resumeColor", selectedColor)
        setColor(selectedColor)
    }, [selectedColor]);



    const [column, setColumn] = useState([[], []]);



    const PersonalDetailsSection = (
        <div className="min-w-[300px] text-center mt-3">
            <h1 className="text-[2em] font-semibold" style={{ color: color }}>{(data.personal_details.detail.firstName) + " " + (data.personal_details.detail.lastName)}</h1>
            <div className="mt-2 min-w-full">
                <p className="text-[1em]" >
                    {data.personal_details.detail.city ? data.personal_details.detail.city + ", " : ""} {data.personal_details.detail.state ? data.personal_details.detail.state + " | " : ""} {data.personal_details.detail.email ? "@ " + (data.personal_details.detail.email) + " | " : ""} {data.personal_details.detail.phone}
                </p>
            </div>
            <div className="flex justify-center items-center gap-3" style={{ color }}>
                {
                    data.personal_details.links?.map((item) =>
                        <a href={item.linkUrl} key={item.id}>{"| " + item.title + " | "}</a>
                    )
                }

            </div>
        </div>
    )

    const projectSection = (
        <section className="h-fit mt-2 min-w-full " key={"projects"}>

            <div className="text-xl font-bold " style={{ color: color }}>{data.projects.title}
                {data.projects.title && <div className="h-[1.5px] bg-black min-w-full mt-2"></div>}
            </div>
            {data.projects.detail?.map((item) =>
                <div className="w-full my-1 p-1" key={item.id}>
                    <p className="inline-block font-semibold text-lg">{item?.project_title}</p> | <a href={item.project_live_link} className="font-medium" style={{ color: color }}>Live</a> | <a href={item.project_code_link} className="font-medium" style={{ color: color }}>
                        Code</a>
                    <div dangerouslySetInnerHTML={{ __html: item?.project_desc }}></div>


                </div>)}

        </section>
    );

    const educationSection = (
        <section className="h-fit mt-3 min-w-full" key={"education"}>
            <div className="text-xl font-bold" style={{ color: color }}>{data.education.title}
                {data.education.title && <div className="h-[1.5px] bg-black min-w-full mt-2"></div>}
            </div>

            {
                data.education.detail?.map((item) =>
                    <div className="w-full my-2 p-1 text-sm" key={item.id}>

                        <div className="flex items-center">
                            <p className="max-w-[80%] min-w-[80%]  font-semibold inline-block">{(item.school_name) || "PCTE Institute of Engineering and Technology"}</p>
                            <p className="inline-block min-w-fit mx-2 text-[12px] font-medium " style={{ color: color }}>{(item.start_year)}- {(item.end_year)}</p>
                        </div>

                        <p className="my-1">{item.degree} in {item.branch}</p>
                        <p className="">{item.score}</p>
                    </div>
                )
            }



        </section>
    )
    const skillsSection = (
        <section className="h-fit m-2 min-w-full" key={"skills"}>
            <div className="text-xl font-bold " style={{ color: color }}>{data.skills.title}
                {data.skills.title && <div className="h-[1.5px] bg-black min-w-full mt-2"></div>}
            </div>

            <div>
                <ul style={{ listStyleType: "disc" }} className="p-3">
                    {
                        data.skills.detail?.map((item) =>
                            <li key={item.id}>{item}</li>
                        )

                    }

                </ul>
            </div>

        </section>
    )


    const workExpSection = (
        <section className="h-fit mt-2 min-w-full " key={"work_experience"}>
            <div className="text-xl font-bold min-w-full " style={{ color: color }}>{data.work_experience.title || ''}
                {data.work_experience.title && <div className="h-[1.5px] bg-black min-w-full mt-2"></div>}
            </div>

            {
                data.work_experience.detail?.map((item) =>
                    <div className="w-full h-fit my-1 p-1" key={item.id}>
                        <p className="inline-block font-semibold text-base"> <span className="text-sm" style={{ color: color }}> {item?.start_year + "-" + item?.end_year} </span> {(" | " + item?.position_title)} {(" | " + item?.company_name)} </p>
                        <div dangerouslySetInnerHTML={{ __html: item?.work_summary }}></div>

                    </div>
                )}

        </section>

    )


    const AchievmentsSection = (
        <section className="h-fit mt-3 min-w-full" key={"achienvments"}>
            <div className="text-xl font-bold " style={{ color: color }}>{data.achievments?.title}
                {data?.achievments?.title && <div className="h-[1.5px] bg-black min-w-full mt-2"></div>}
            </div>

            <div>
                <ul style={{ listStyleType: "disc" }} className="px-2 my-2 max-w-full">

                    {
                        data.achievments?.detail?.map((item) =>
                            <div className="flex gap-2 my-1 px-1" key={item.id}>
                                <li className="font-normal"><span>{item.awarded_year + " | "}</span> {item.award_name} </li> | <a href={item.certificate_link || "#"} className="font-normal" style={{ color: color }}>{item.awarded_by || "->"}</a>
                            </div>

                        )
                    }

                </ul>

            </div>


        </section>

    )

    const otherSection = (
        <section className="h-20 mt-2 min-w-full" key={"other"}>
            <div className="text-xl font-bold " style={{ color: color }}>{data.other.title}
                {data.other.title && <div className="h-[1.5px] bg-black min-w-full mt-2"></div>}
            </div>
                <div className="my-1" dangerouslySetInnerHTML={{ __html: data.other.detail }}></div>
        </section>
    )

    useEffect(() => {
        setColumn([
            [
                educationSection, projectSection, skillsSection
            ],
            [
                workExpSection, AchievmentsSection,otherSection
            ]
        ])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, color]);


    return (
        <div ref={ref} className="h-full bg-white p-5 overflow-x-scroll no-scrollbar  "
            style={{ scrollbarWidth: "none"}}>
            {
                PersonalDetailsSection
            }
            <div className="h-[0.5px] bg-black ml-5 mt-4 w-full"></div>

            <div className="flex justify-between py-2 px-3 gap-5 ">
                <div className="col-1 flex-col flex items-start justify-start
                 min-w-[50%] p-3 pl-0 text-sm ">
                    {
                        column[0]
                    }
                </div>

                <div className="col-2 flex-col flex items-start justify-start
                 min-w-[50%] p-3  text-sm">
                    {
                        column[1]
                    }
                </div>
            </div>
        </div>
    );
});

export default ResumePage;
