/* eslint-disable react/prop-types */
import Points from "./subSections/Points";
import SaveButton from "../subComponents/SaveButton";
import InputComponent from "../InputComponent";
import { MdDelete } from "react-icons/md";
import AddButton from "../subComponents/AddButton";


const Skills = (props) => {

    const { handleSave, handleTitleChange, setCurrValues, currValues } = props;


    function handleAddSkills() {
        const newSkill = [""];

        setCurrValues((prev) => ({
            ...prev,
            detail: [...prev.detail, newSkill]
        }));
    }

    function handleRemoveSkills(index) {
        const filteredLinks = currValues.detail?.filter((item, idx) => idx != index)
        setCurrValues((prev) => ({ ...prev, detail: [...filteredLinks] }))
    }


    function handleLinkChange(e,index) {
        const { value } = e.target;
        setCurrValues((prev) => {
            const updatedProject = [...prev.detail]; 
            updatedProject[index] =  value ;
            return { ...prev, detail: updatedProject };
        });
    }

    return (
        <form onSubmit={(e) => handleSave(e)} className="flex flex-col w-[300px] p-2">
            <InputComponent
                type={"text"} value={currValues?.title}
                onChange={(e) => handleTitleChange(e)}
                label={"Title"}
                name={"title"} id={"title"}
                placeholder={"Section Title"} />
            {

                currValues?.detail?.map((item, index) =>

                    <div key={index} className="flex items-center flex-nowrap">

                        <Points
                            index={index}
                            value={currValues?.detail[index]}
                            onChange={(e)=>handleLinkChange(e,index)}
                        />
                        <div>
                        <MdDelete  onClick={() => handleRemoveSkills(index)} size={25} className="text-red-500 cursor-pointer" />
                        </div>
                    </div>

                )
            }

            <AddButton onClick={handleAddSkills}
            title={"Add Skills"}/>

            <SaveButton />

        </form>
    );
}

export default Skills;
