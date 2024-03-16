/* eslint-disable react/prop-types */
import InputComponent from "../InputComponent";
import SaveButton from "../subComponents/SaveButton";
import TextEditor from "./subSections/TextEditor";

const Others = (props) => {
    const { setCurrValues, currValues, handleTitleChange, handleSave } = props;
    function setfunction(html) {
        setCurrValues((prev) => ({
            ...prev,
            detail: html
        }))
    }
    
    return (
        <form onSubmit={(e) => handleSave(e)}>
            <InputComponent type={"text"} value={currValues?.title}
                onChange={(e) => handleTitleChange(e)}
                label={"Title"} name={"title"} id={"title"}
                placeholder={"Section Title"} />

            <TextEditor value={currValues?.detail} onChange={(html)=>setfunction(html)}
            />
            <SaveButton />
        </form>
    );
}

export default Others;
