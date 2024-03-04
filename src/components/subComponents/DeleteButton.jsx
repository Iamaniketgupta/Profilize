import { MdDeleteForever } from "react-icons/md";

const DeleteButton = (props) => {
    return (
            <div {...props} className="flex items-center justify-between p-3 my-4 mx-5 mb-4 w-[100px] text-white font-bold bg-red-500 hover:bg-red-600 rounded-xl cursor-pointer">
                Delete 
                <MdDeleteForever />
            </div>
    );
}

export default DeleteButton;
