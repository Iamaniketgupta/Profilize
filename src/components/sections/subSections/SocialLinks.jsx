/* eslint-disable react/prop-types */
import InputComponent from "../../InputComponent";
import { v4 as uuidv4 } from 'uuid';

const SocialLinks = (props) => {
  
    const {currValues,index,setCurrValues}=props;

    function handleLinkChange(e) {
        const { name, value } = e.target;
    
        setCurrValues((prev) => {
            const updatedLinks = [...prev.links]; 
            updatedLinks[index] = { ...updatedLinks[index],id:uuidv4(), [name]: value };
            return { ...prev, links: updatedLinks };
        });
    }
    
    return (
        <div>
            <InputComponent
                type="text"
                label="Link Text"
                name="title"
                value={currValues.links[index]?.title}
                onChange={(e) => handleLinkChange(e)}
            />

            <InputComponent
                type="url"
                label="Social Link"
                name="linkUrl"
                placeholder={"e.g. https://Portfolio.me"}
                value={currValues.links[index]?.linkUrl}
                onChange={(e) => handleLinkChange(e)}
            />

        </div>
    );
};

export default SocialLinks;