function About() {
    return (
        <div className="bg-white text-black-300 p-5 " >
            <div className="flex justify-center text-7xl">About Us</div>
            <div className="flex">
                <div className="flex justify-center w-full h-[100px] bg-gray-400 border border-slate-700 rounded-[25px] p-[10px] m-3" >Ayush Sutariya<br />Developer</div>
                <div className=" flex justify-center w-full h-[100px] bg-gray-400  border border-slate-700 rounded-[25px]  p-[10px] m-3" >Chirag Dudhagara <br />Developer</div>
            </div>
            <p>Our Services</p>
            <div className="flex flex-wrap justify-around">
                <div className=" w-96 h-96 bg-gray-400 border border-slate-700 rounded-[10px] p-3 m-3" >Web Development</div>
                <div className=" w-96 h-96 bg-gray-400 border border-slate-700 rounded-[10px] p-3 m-3" >Application Development</div>
                <div className=" w-96 h-96 bg-gray-400 border border-slate-700 rounded-[10px] p-3 m-3" >Graphics Design</div>


            </div>
        </div>


    );
}

export default About;