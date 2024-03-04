/* eslint-disable react/prop-types */

const InfoBox = (props) => {
    
    const {infoDesc,infoTitle,icon} =props;

    return (
        <div className="md:w-[350px] h-[550px] w-[300px] p-5 border-2 rounded-xl shadow-sm">
        <div className="text-center w-full h-1/2 bg-contain overflow-clip">
            <img src={icon} alt="infoicons" className="h-full m-auto cursor-pointer"/>
        </div>
        <div className="my-4 p-2">
            <p className="font-bold text-2xl my-3">
               {infoTitle}
            </p>
            <p className="font-semibold text-xl">
                {infoDesc}
            </p>
        </div>
    </div>
    );
}

export default InfoBox;
