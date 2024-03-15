/* eslint-disable react/prop-types */
import { useState } from "react";
import InputComponent from "../InputComponent";
import Chips from "./subSections/Chips";
import { v4 as uuidv4 } from 'uuid';
import TextEditor from "./subSections/TextEditor";
import DeleteButton from "../subComponents/DeleteButton";
import AddButton from "../subComponents/AddButton";
import SaveButton from "../subComponents/SaveButton";

const WorkExperience = (props) => {

    const { handleSave, handleTitleChange, setCurrValues, currValues } = props;

    const [activeChip, setActiveChip] = useState(currValues.detail[0]?.id || null);

    function handleWorkDataChange(e, index) {
        const { name, value } = e.target;
        const updatedDetails = [...currValues.detail];

        updatedDetails[index] = {
            ...updatedDetails[index],
            [name]: value,
        };

        setCurrValues((prev) => ({
            ...prev,
            detail: updatedDetails
        }));
    }

    const handleWorkSummaryChange = (html, index) => {
        setCurrValues((prev) => ({
            ...prev,
            detail: prev.detail.map((item, i) =>
                i === index ? { ...item, work_summary: html } : item
            ),
        }));
    };
    

    const handleAddWork = () => {
        const newProject = {
            id: uuidv4(),
            position_title: "",
            company_name: "",
            start_year: "",
            end_year: "",
            work_summary: ""
        };

        setCurrValues((prev) => ({
            ...prev,
            detail: [...prev.detail, newProject]
        }));

        setActiveChip(newProject.id);
    }

    const handleRemoveWork = (index) => {
        const filteredData = currValues.detail?.filter((item, idx) => idx != index)
        setCurrValues((prev) => ({ ...prev, detail: [...filteredData] }))
    }

    console.log(currValues)

    return (
        <form onSubmit={(e) => handleSave(e)}>
            <InputComponent

                onChange={(e) => handleTitleChange(e)}
                value={currValues.title}
                type={"text"}
                label={"Title"}
                name={"title"}
                id={"title"}
                placeholder={"Section Title"} />

            <div>
                <Chips currValues={currValues} activeChip={activeChip} setActiveChip={setActiveChip} />

            </div>


            {currValues?.detail.map((item, index) =>

                item.id === activeChip &&
                <div key={item.id}>
                    <InputComponent
                        onChange={(e) => handleWorkDataChange(e, index)}
                        value={item?.position_title || ""}
                        type={"text"}
                        label={"Position Title"}
                        placeholder={"Enter Position Titl e.g. Senior Software Engineer"}
                        id={"position_title"}
                        name={"position_title"} />


                    <InputComponent
                        onChange={(e) => handleWorkDataChange(e, index)}
                        value={item?.company_name}

                        type={"text"}
                        label={"Company Name"}
                        placeholder={"Enter Company name e.g. Microsoft"}
                        id={"company_name"}
                        name={"company_name"} />

                    <InputComponent
                        onChange={(e) => handleWorkDataChange(e, index)}
                        value={item?.start_year}

                        type={"text"}
                        label={"Start Year"}
                        placeholder={"Enter start year e.g. 2022"}
                        id={"start_year"}
                        name={"start_year"} />

                    <InputComponent
                        onChange={(e) => handleWorkDataChange(e, index)}
                        value={item?.end_year}
                        type={"text"}
                        label={"End year"}
                        placeholder={"if applicable Enter end year e.g. 2024"}
                        id={"end_year"}
                        name={"end_year"} />


                    <p className='mx-6 py-3'>Write Some Description about Work</p>
                    <TextEditor name={"work_summary"}
                        value={currValues?.detail[index]?.work_summary}
                        onChange={(html) => handleWorkSummaryChange(html, index)}
                    />

                    <div>
                        <DeleteButton onClick={() => handleRemoveWork(index)} />
                    </div>
                </div>
            )

            }

            <AddButton onClick={handleAddWork} title={"Add Work"} />
            <SaveButton />


        </form>
    );
}

export default WorkExperience;
