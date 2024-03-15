
/* eslint-disable react/prop-types */
const ToolBar = (props) => {
    const { colors, selectedColor, setSelectedColor } = props;

    return (
        <div className='min-h-[70px] w-full flex flex-wrap items-center justify-evenly my-5 rounded-3xl border-2 shadow-md'>
            <div className="flex gap-3 max-w-fit items-center justify-center">
                {colors.map((item, index) => (
                    <div key={index} onClick={() => 
                        setSelectedColor(item)
                    }
                        className={`cursor-pointer w-10 h-10 rounded-full border-2 ${item === selectedColor && "border-indigo-800 border-4"}`} style={{ backgroundColor: item }} >
                    </div>
                ))}
            </div>

        </div>
    );
}

export default ToolBar;
