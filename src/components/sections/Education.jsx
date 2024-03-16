/* eslint-disable react/prop-types */
import { useState } from "react";
import InputComponent from "../InputComponent";
import Chips from "./subSections/Chips";
import { v4 as uuidv4 } from 'uuid';
import AddButton from "../subComponents/AddButton";
import DeleteButton from "../subComponents/DeleteButton";
import SaveButton from "../subComponents/SaveButton";

const Education = (props) => {
    const { handleSave, handleTitleChange, setCurrValues, currValues } = props;

    const [activeChip, setActiveChip] = useState(currValues.detail[0]?.id || null);

    function handleEduDataChange(e, index) {
        const { name, value } = e.target;
        // Create a copy of the current values array
        const updatedDetails = [...currValues.detail];

        // Update the specific project's data
        updatedDetails[index] = {
            ...updatedDetails[index],
            [name]: value,
        };

        // Update the state with the modified array
        setCurrValues((prev) => ({
            ...prev,
            detail: updatedDetails
        }));
    }


    const handleAddEducation = () => {
        const newEducation = {
            id: uuidv4(),
            school_name: "",
            degree: "",
            start_year: "",
            end_year: "",
            brach: "",
            score: ""
        };

        setCurrValues((prev) => ({
            ...prev,
            detail: [...prev.detail, newEducation]
        }));

        setActiveChip(newEducation.id);
    }

    const handleRemoveEducation = (index) => {
        const filteredData = currValues.detail?.filter((item, idx) => idx != index)
        setCurrValues((prev) => ({ ...prev, detail: [...filteredData] }))
    }

    return (
        <form onSubmit={(e) => handleSave(e)}>
            <InputComponent
                value={currValues?.title}
                onChange={(e) => handleTitleChange(e)}
                type={"text"}
                label={"Title"} name={"title"} id={"title"} placeholder={"Section Title"} />

            <div>
                <Chips currValues={currValues} activeChip={activeChip} setActiveChip={setActiveChip} />
            </div>


            {currValues?.detail.map((item, index) =>

                item.id === activeChip &&
                <div key={item.id}>
                    <InputComponent
                        onChange={(e) => handleEduDataChange(e, index)}
                        value={item?.school_name}
                        type={"text"}
                        label={"School Name"}
                        placeholder={"Enter School name e.g. Arya Sen sec school or National Institute of Technology"}
                        id={"school_name"}
                        name={"school_name"} />

                    <InputComponent
                        onChange={(e) => handleEduDataChange(e, index)}
                        value={item?.start_year}
                        type={"text"}
                        label={"Start Year"}
                        placeholder={"Enter start year e.g. 2022"}
                        id={"start_year"}
                        name={"start_year"} />

                    <InputComponent
                        onChange={(e) => handleEduDataChange(e, index)}
                        value={item?.end_year}
                        type={"text"}
                        label={"End year"}
                        placeholder={"if applicable Enter end year e.g. 2024"}
                        id={"end_year"}
                        name={"end_year"} />

                    <InputComponent
                        onChange={(e) => handleEduDataChange(e, index)}
                        value={item?.degree}
                        type={"text"}
                        label={"Degree"}
                        placeholder={"e.g. 10th /12th or B.Tech, MCA "}
                        id={"degree"}
                        name={"degree"} />

                    <InputComponent
                        onChange={(e) => handleEduDataChange(e, index)}
                        value={item?.branch}
                        type={"text"}
                        label={"Branch / Field of Study"}
                        placeholder={"e.g. Computer science and Engineering  "}
                        id={"branch"}
                        name={"branch"} />

                    <InputComponent
                        onChange={(e) => handleEduDataChange(e, index)}
                        name={"score"}
                        value={item?.score}
                        type={"text"}
                        label={"Score in CGPA or % age"}
                        placeholder={"e.g. CGPA 8.5 or only write 95% "}
                        id={"score"}
                    ></InputComponent>


                    <div>
                        <DeleteButton onClick={() => handleRemoveEducation(index)} />
                    </div>
                </div>

            )
            }

            <AddButton onClick={handleAddEducation} />
            <SaveButton />


        </form>
    );
}

export default Education;
