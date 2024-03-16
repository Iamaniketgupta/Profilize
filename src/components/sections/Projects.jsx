/* eslint-disable react/prop-types */
import { useState } from 'react';
import InputComponent from '../InputComponent';
import Chips from './subSections/Chips';
import { v4 as uuidv4 } from 'uuid';
import SaveButton from '../subComponents/SaveButton';
import TextEditor from './subSections/TextEditor';
import DeleteButton from '../subComponents/DeleteButton';
import AddButton from '../subComponents/AddButton';

const Projects = (props) => {
    const { handleSave, handleTitleChange, setCurrValues, currValues } = props;

    const [activeChip, setActiveChip] = useState(currValues.detail[0]?.id || null);

    function handleProjDataChange(e, index) {
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

    function handleProjectDescChange (html, index) {
        setCurrValues((prev) => ({
            ...prev,
            detail: prev.detail.map((item, i) =>
                i === index ? { ...item, project_desc: html } : item
            ),
        }));
    }
    
    const handleAddProjects = () => {
        const newProject = {
            id: uuidv4(),
            project_title: "",
            project_live_link: "",
            project_code_link: "",
            project_desc: ""
        };

        setCurrValues((prev) => ({
            ...prev,
            detail: [...prev.detail, newProject]
        }));

        setActiveChip(newProject.id);
    }

    const handleRemoveProjects = (index) => {
        const filteredProjects = currValues.detail?.filter((item, idx) => idx != index)
        setCurrValues((prev) => ({ ...prev, detail: [...filteredProjects] }))
    }


    return (
        <form onSubmit={(e) => handleSave(e)}>
            <InputComponent
                onChange={(e) => handleTitleChange(e)}
                type={"text"}
                value={currValues?.title}
                label={"Section Title"} name={"title"}
                id={"title"} placeholder={"Section Title"}
            />


            <Chips currValues={currValues} activeChip={activeChip} setActiveChip={setActiveChip} />

            {
                currValues?.detail.map((item, index) =>
                    item.id === activeChip && <div key={item.id}>

                        <InputComponent
                            value={item.project_title}
                            onChange={(e) => handleProjDataChange(e, index)}
                            type={"text"}
                            label={`Project-${index + 1} Title`}
                            placeholder={"e.g. Youtube clone "}
                            name={"project_title"} />

                        <InputComponent
                            value={item.project_live_link}
                            onChange={(e) => handleProjDataChange(e, index)}
                            type={"url"}
                            label={"Live Link"}
                            placeholder={"e.g. Youtube clone hosted link https://myytclone.netlify.app"}
                            name={"project_live_link"} />

                        <InputComponent
                            value={item.project_code_link}
                            onChange={(e) => handleProjDataChange(e, index)}
                            type={"url"}
                            label={"Code Link"}
                            placeholder={"e.g. Github repo/code link https://myytclone.github.io/username"}
                            name={"project_code_link"} />


                        <p className='mx-6 py-3'>Write Some Description about Project</p>
                        
                        <TextEditor name={"project_desc"}
                            value={currValues?.detail[index]?.project_desc}
                            onChange={(html) => handleProjectDescChange(html, index)}
                        />


                        <div>
                            <DeleteButton onClick={() => handleRemoveProjects(index)} />
                        </div>
                    </div>

                )
            }

            <AddButton onClick={handleAddProjects} title={"Add Projects"} />


            <SaveButton />
        </form>
    );
}

export default Projects;
