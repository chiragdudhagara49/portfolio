function Work(){
    return(
        <div className="bg-gray-800 text-white " >
        <div className="flex justify-center text-7xl">Our Skills</div>
            <div className="flex" style={{ flexWrap: "wrap" }}>
                <div className="flex justify-center w-full h-[100px] p-3 bg-gray-600 m-3 border border-gray-400 rounded-[25px]" >NodeJs</div>
                <div className="flex justify-center w-full h-[100px] p-3 bg-gray-600 m-3 border border-gray-400 rounded-[25px]" >React</div>
                <div className="flex justify-center w-full h-[100px] p-3 bg-gray-600 m-3 border border-gray-400 rounded-[25px]" >Js</div>
                <div className="flex justify-center w-full h-[100px] p-3 bg-gray-600 m-3 border border-gray-400 rounded-[25px]" >Flutter</div>
                <div className="flex justify-center w-full h-[100px] p-3 bg-gray-600 m-3 border border-gray-400 rounded-[25px]" >HTML & CSS</div>
            </div>
        </div>
    );
}

export default Work;