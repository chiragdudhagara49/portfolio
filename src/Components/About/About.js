function About() {
    return (
        <div className="bg-white text-black-300 p-5 " >
            <div className="flex justify-center text-7xl">About Us</div>
            <div className="flex justify-center">
                <div className="flex justify-center w-1/3 h-[100px] bg-yeelo border-0 border-slate-700 rounded-[25px] p-[10px] m-3" >Ayush Sutariya<br />Developer</div>
                <div className=" flex justify-center w-1/3 h-[100px] bg-yeelo  border-0 border-slate-700 rounded-[25px]  p-[10px] m-3" >Chirag Dudhagara <br />Developer</div>
            </div>
            <div className="flex justify-center text-7xl">What we offer</div>

            <div className="flex flex-wrap justify-around">
                <div className=" w-96 h-96 bg-gray-400 border border-slate-700 rounded-[10px] p-3 m-3 hover:bg-blue-500 hover:pt-6 duration-500" >
                    <div className="flex justify-center m-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" ><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10 12c0 .685-.07 1.354-.202 2h-3.853c.121-1.283.129-2.621 0-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278 2.435.977 4.397 2.882 5.448 5.278zm-5.554 0h-2.605v-5.658c1.215 1.46 2.117 3.41 2.605 5.658zm-4.605-5.658v5.658h-2.605c.488-2.248 1.39-4.198 2.605-5.658zm0 7.658v4h-2.93c-.146-1.421-.146-2.577 0-4h2.93zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658h2.605zm2 5.658v-5.658h2.605c-.488 2.248-1.39 4.198-2.605 5.658zm0-7.658v-4h2.93c.146 1.421.146 2.577 0 4h-2.93zm-4.711-11.278c-.896 1.527-1.565 3.318-1.948 5.278h-3.5c1.051-2.396 3.013-4.301 5.448-5.278zm-6.087 7.278h3.853c-.121 1.283-.129 2.621 0 4h-3.853c-.132-.646-.202-1.315-.202-2s.07-1.354.202-2zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278-2.435-.977-4.397-2.882-5.448-5.278zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5c-1.051 2.396-3.013 4.301-5.448 5.278z" /></svg>
                    </div>
                    <div className=" flex justify-center font-bold  text-xl m-2">Web Development</div>
                    <div className="p-5">Our expert developers craft tailor-made websites that align perfectly with your brand identity and business goals. We leverage the latest technologies to create responsive, fast-loading, and user-friendly websites that engage visitors across all devices.</div>
                </div>

                <div className=" w-96 h-96 bg-gray-400 border border-slate-700 rounded-[10px] p-3 m-3 hover:bg-red-400 hover:pt-6 duration-500" >
                    <div className="flex justify-center m-3">
                        <svg xmlns="http://www.w3.org/2000/svg " width="50" height="50" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 16l-6-2.935v-2.131l6-2.934v2.199l-3.64 1.801 3.64 1.796v2.204zm2-8v2.199l3.64 1.801-3.64 1.796v2.204l6-2.935v-2.131l-6-2.934z" /></svg>
                    </div>
                    <div className="flex justify-center font-bold text-xl m-2">Application Development</div> 
                    <div className="p-5">Beyond websites, we create web applications that serve specific functions or streamline business processes. From customer portals to data management tools, we've got you covered.</div>
                </div>
                
                <div className=" w-96 h-96 bg-gray-400 border border-slate-700 rounded-[10px] p-3 m-3 hover:bg-amber-300 hover:pt-6 duration-500" >
                    <div className="flex justify-center m-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M11.334 14c.584 2.239 2.001 2.547 2.001 4.02 0 1.094-.896 1.98-2.001 1.98-1.104 0-2.015-.887-2.015-1.98 0-1.473 1.432-1.781 2.015-4.02zm12.666-2c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5.205-7.316l-2.641 2.316h2.791l1.085-.935c-.37-.498-.782-.96-1.235-1.381zm3.205 7.316c0-1.527-.354-2.969-.969-4.265l-4.486 3.902c-1.402 1.226-2.126.041-3.911 1.091-.237.141-.486.185-.71.158-.566-.07-1.018-.594-.941-1.216.024-.205.113-.419.267-.633 1.128-1.571.183-2.49 1.553-3.68l4.435-3.86c-1.527-.943-3.317-1.497-5.238-1.497-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10z" /></svg>
                    </div>
                    <div className="flex justify-center font-bold text-xl m-2">Graphics Design</div>
                    <div className="p-5">Our design team focuses on creating visually appealing interfaces and intuitive user experiences. We aim to make every interaction a delightful journey for your website visitors.</div>
                </div>


            </div>
            <div className=" flex justify-center bg-slate-400 p-5">
                <div>
                <div className="flex justify-center text-4xl ">Why choose us?</div>

                <div className="text-lg"><b>Experience</b> </div>
                <div className="mb-3">With years of experience in the industry, we've honed our skills and processes to deliver top-notch results.</div>
                <div className="text-lg"><b>Collaborative Approach</b> </div>
                <div className="mb-3">We believe in working closely with our clients. Your input is invaluable throughout the development process.</div>

                <div className="text-lg"><b>Cutting-Edge Technology</b> </div>
                <div className="mb-3">We stay updated with the latest trends and technologies to provide modern, future-proof solutions.</div>

                <div className="text-lg"><b>Client Satisfaction</b> </div>
                <div className="mb-3">Our success is measured by your satisfaction. We're dedicated to exceeding your expectations. </div>
                </div>
            </div>
        </div>


    );
}

export default About;