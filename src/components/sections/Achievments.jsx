/* eslint-disable react/prop-types */
import { useState } from "react";
import InputComponent from "../InputComponent";
import DeleteButton from "../subComponents/DeleteButton";
import AddButton from "../subComponents/AddButton";
import SaveButton from "../subComponents/SaveButton";
import { v4 as uuidv4 } from 'uuid';
import Chips from "./subSections/Chips";

const Achievments = (props) => {

    const { handleSave, handleTitleChange, setCurrValues, currValues } = props;

    const [activeChip, setActiveChip] = useState(currValues.detail[0]?.id || null);

    function handleAchievmentDataChange(e, index) {
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


    const handleAddAchievment = () => {
        const newAchievment = {
            id: uuidv4(),
            award_name: "",
            awarded_by: "",
            awarded_year: "",
            certificate_link:""
        };

        setCurrValues((prev) => ({
            ...prev,
            detail: [...prev.detail, newAchievment]
        }));

        setActiveChip(newAchievment.id);
    }

    const handleRemoveAchievment = (index) => {
        const filteredData = currValues.detail?.filter((item, idx) => idx != index)
        setCurrValues((prev) => ({ ...prev, detail: [...filteredData] }))
    }


    return (
        <form onSubmit={(e) => handleSave(e)}>

            <InputComponent
                onChange={(e) => handleTitleChange(e)}
                type={"text"}
                value={currValues?.title}
                label={"Title"}
                name={"title"}
                id={"title"}
                placeholder={"Section Title"} />

            <div>
                <Chips currValues={currValues} activeChip={activeChip} setActiveChip={setActiveChip} />

            </div>

            {
                currValues?.detail.map((item, index) =>
                    item?.id === activeChip && <div key={item?.id}>
                        <InputComponent
                            onChange={(e) => handleAchievmentDataChange(e, index)}
                            value={item?.award_name}
                            type={"text"}
                            label={"Awarded For / Award Name"}
                            placeholder={"e.g. Best Web Developer"}
                            id={"award_name"}
                            name={"award_name"} />

                        <InputComponent
                            onChange={(e) => handleAchievmentDataChange(e, index)}
                            value={item?.awarded_by}
                            type={"text"}
                            label={"Awarded By"}
                            placeholder={"e.g. By Indian Institute of Technology"}
                            id={"awarded_by"}
                            name={"awarded_by"} />

                        <InputComponent
                            onChange={(e) => handleAchievmentDataChange(e, index)}
                            value={item?.awarded_year}
                            type={"text"}
                            label={"Awarded Year"}
                            placeholder={"e.g. 2024"}
                            id={"awarded_year"}
                            name={"awarded_year"} />

                        <InputComponent
                            onChange={(e) => handleAchievmentDataChange(e, index)}
                            value={item?.certificate_link}
                            type={"url"}
                            label={"Certificate Link"}
                            placeholder={"e.g. https://leetcode.com/coding-champ/3213232"}
                            id={"certificate_link"}
                            name={"certificate_link"} />


                        <DeleteButton onClick={() => handleRemoveAchievment(index)} />
                    </div>)
            }

            <AddButton onClick={handleAddAchievment} />
            <SaveButton />

        </form>
    );
}

export default Achievments;
