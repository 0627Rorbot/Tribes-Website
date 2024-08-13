export default function Line() {
    return (
        <div className="relative flex flex-col items-center box-border mt-1">
            <div className="relative w-[140px] h-[2px] bg-gray-666"></div> 
            <div className="relative flex flex-row mt-[-11px] w-[140px] h-[20px] justify-center items-center">
                <div className="relative w-[2px] h-[6px] bg-gray-666"></div>
                <div className="relative w-[4px] h-[10px] bg-gray-666 ml-[12px] rounded-[3px]"></div>
                <div className="relative w-[2px] h-[6px] bg-gray-666 ml-[11px]"></div>
            </div>
        </div>
    );
}