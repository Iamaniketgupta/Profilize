/* eslint-disable react/prop-types */

const Chips = (props) => {
    const { currValues, setActiveChip, activeChip } = props;

    const handleChipClick = (elemId) => {
        setActiveChip(elemId);
    }

    return (
        <>
            {
                currValues.detail && (currValues.detail).map((elem, idx) => {
                    return <div
                        key={elem.id}
                        onClick={() => handleChipClick(elem?.id)}
                        className={`${activeChip === elem.id ? 'bg-gradient-to-r from-orange-400 to-pink-300 text-white' : 'bg-white '}
                    flex gap-2 items-center
                    justify-center w-fit 
                    p-2 px-5 rounded-3xl m-3 
                    border-2  cursor-pointer`}>

                        {currValues.title} {idx + 1}
                    </div>
                })

            }
        </>
    );
}

export default Chips;
