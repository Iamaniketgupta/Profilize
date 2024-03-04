/* eslint-disable react/prop-types */

const InputComponent = ({id,label,...props}) => {
    return (
        <div className="flex flex-col p-3 w-full min-w-[270px] gap-3">
         {label &&<label htmlFor={id} 
         className="px-3 font-semibold text-slate-700">{label}</label> }
         <input {...props}
         className="h-10 mx-2 px-3 rounded-lg focus:outline-orange-400 border-2 " />  
        </div>
    );
}

export default InputComponent;
