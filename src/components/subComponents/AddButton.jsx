import { IoAddCircle } from 'react-icons/io5';

const AddButton = (props) => {
    return (
        <div className='text-xl px-5 w-fit font-bold mt-10 '>
        <IoAddCircle {...props}
            className='text-orange-500 cursor-pointer' size={"40px"} />
    </div>
    );
}

export default AddButton;
