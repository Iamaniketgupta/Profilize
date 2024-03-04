/* eslint-disable react/prop-types */
import InputComponent from '../InputComponent';
import SocialLinks from './subSections/SocialLinks';
import SaveButton from '../subComponents/SaveButton';
import { MdAddLink } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";

const PersonalDetails = (props) => {
    const { setCurrValues,currValues,handleTitleChange } = props;


    function handleInputChange(e) {

        setCurrValues((prev) => ({
            ...prev,
            detail: {
                ...prev.detail,
                [e.target.name]: e.target.value
            }
        })
        )
    }


   function handleAddLinks() {
        const newLink = {
            title: "",
            linkUrl: ""
        };
        setCurrValues((prev) => ({
            ...prev,
            links: [...prev.links, newLink]
        }));
    }

    function handleRemoveLinks(index) {
        const filteredLinks = currValues.links?.filter((item,idx) => idx != index)
        setCurrValues((prev) => ({ ...prev, links: [...filteredLinks] }))
    }




    return (
        <form onSubmit={(e) => props.handleSave(e)}>

            <InputComponent
                onChange={(e) => handleTitleChange(e)}
                value={currValues.title}
                type={"text"}
                label={"Title"} name={"title"}
                id={"title"}
                placeholder={"Section Title"} />

            <InputComponent
                onChange={(e) => handleInputChange(e)}
                value={currValues.detail?.firstName}
                type={"text"}
                label={"First Name"}
                placeholder={"Enter first name e.g. Aniket"}
                id={"first_name"}
                name={"firstName"} />


            <InputComponent
                value={currValues.detail?.lastName}
                onChange={(e) => handleInputChange(e)}
                type={"text"}
                label={"Last Name"}
                placeholder={"Enter Last name e.g. Gupta"}
                id={"last_name"}
                name={"lastName"} />

            <InputComponent
                value={currValues.detail?.jobTitle}
                onChange={(e) => handleInputChange(e)}
                type={"text"}
                label={"Job Title"}
                placeholder={"Enter job title e.g. Frontend Developer"}
                id={"job_title"}
                name={"jobTitle"}
            />
            <InputComponent
                value={currValues.detail?.phone}
                onChange={(e) => handleInputChange(e)}
                type={"tel"}
                label={"Phone"}
                placeholder={" e.g. +91 51501-61846"}
                id={"phone"}
                name={"phone"} />
            <InputComponent
                value={currValues.detail?.email}
                onChange={(e) => handleInputChange(e)}
                type={"email"}
                label={"Email"}
                placeholder={"Enter Email name e.g. abc@gmail.com"}
                id={"email"}
                name={"email"} />

            <InputComponent
                value={currValues.detail?.city}
                onChange={(e) => handleInputChange(e)}
                type={"text"}
                label={"City"}
                placeholder={"Enter city name e.g. Ludhiana"}
                id={"city"}
                name={"city"} />

            <InputComponent
                value={currValues.detail?.state}
                onChange={(e) => handleInputChange(e)}
                type={"text"}
                label={"State"}
                placeholder={"Enter State e.g. Punjab"}
                id={"state"}
                name={"state"} />

            <InputComponent
                value={currValues.detail?.country}
                onChange={(e) => handleInputChange(e)}
                type={"text"}
                label={"Country"}
                placeholder={"Enter Country name e.g. India"}
                id={"country"}
                name={"country"} />

            {
                currValues.links?.map((elem,index) =>
                    <div key={index} className='w-[100%]'>
                        <div className="flex items-center justify-left">
                                <SocialLinks
                                    label={"Enter Social Link "}
                                    placeholder={"e.g. https://Portfolio.me"}
                                    setCurrValues={setCurrValues}
                                    currValues={currValues}
                                    index={index}
                                />

                            <div key={elem.id}>
                                <RiDeleteBin5Fill
                                    onClick={() => handleRemoveLinks(index)}
                                    size={20} title="Remove Link"
                                    className="text-red-600 cursor-pointer" />
                            </div>
                        </div>
                    </div>

                )
            }

            <div>
                <div >
                    <label onClick={handleAddLinks}
                        className='flex items-center 
                    justify-evenly w-fit p-4 m-2 gap-3 font-semibold
                    bg-gradient-to-r bg-clip-text from-pink-500 to-orange-500 cursor-pointer text-transparent select-none'>
                        <MdAddLink size={28} className='text-red-500'/>
                        <p> Add Social Links</p>
                    </label>
                </div>
            </div>

            <SaveButton />

        </form >

    );
}

export default PersonalDetails;
