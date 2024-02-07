const time = {
    time: "2:05:40",
    Degree: "20°C",
    city: "Kigali",
    humidity: "80%",
}
export default function Component8() {
    return (
        <div className='flex flex-col-reverse justify-start gap-8 bg-blue-100 h-52 w-1/3 ml-auto absolute  right-0 z-10  rounded-lg text-center' style={{ top: '-70px' }}>
            <div className='flex flex-row gap-10 '>
                <div><h2 className=''>{time.time}</h2></div>
                <div><h2 className=''>{time.Degree}</h2></div>
            </div>
            <div className='text-4xl'><h2 className='text-lg'> Humidity   {time.humidity}</h2></div>
        </div>


    )
}