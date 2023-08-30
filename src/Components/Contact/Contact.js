function Contact() {

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <p as="li" variant="small" color="blue-gray" className="p-1 font-normal" >
                <a href="#" className="flex items-center">
                    Home
                </a>
            </p>
            <p as="li" variant="small" color="blue-gray" className="p-1 font-normal" >
                <a href="#" className="flex items-center">
                    About
                </a>
            </p>
            <p as="li" variant="small" color="blue-gray" className="p-1 font-normal" >
                <a href="#" className="flex items-center">
                    Work
                </a>
            </p>
            <p as="li" variant="small" color="blue-gray" className="p-1 font-normal" >
                <a href="#" className="flex items-center">
                    Contact
                </a>
            </p>
        </ul>
    );




    return (
        <div className=" bg-gray-800 text-white p-5" >


            <div className="max-w-screen-md mx-auto p-5 bg-slate-700 bg-opecity-20 rounded-[25px] backdrop-blur-2xl backdrop-saturate-100   ">

                <form className="w-full">
                    <div className="flex justify-center text-7xl mb-10">Contact Us</div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-transparent text-white border-b  border-gray-500 py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-100 " id="grid-first-name" type="text" placeholder="Jane" />

                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-transparent text-white border-b border-gray-500  py-3 px-4 leading-tight focus:outline-none focus:border-gray-100" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-password">
                                Email Address
                            </label>
                            <input className="appearance-none block w-full bg-transparent text-white border-b border-gray-500  py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-100" id="grid-email" type="email" placeholder="********@*****.**" />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-password">
                                Your Message
                            </label>
                            <textarea rows="3" className="max-h-64 min-h-[50px] appearance-none block w-full bg-transparent text-white border-b border-gray-500  py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-100">

                            </textarea>
                        </div>
                        <div className="flex justify-between w-full px-3">
                            <div className="md:flex md:items-center">
                                <label className="block text-gray-400 font-bold">
                                    <input className="mr-2 leading-tight" type="checkbox" />
                                    <span className="text-sm">
                                        Send me your newsletter!
                                    </span>
                                </label>
                            </div>
                            <button className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded-[15px]" type="submit">
                                Send Message
                            </button>
                        </div>

                    </div>

                </form>
            </div>

            

            <div className="flex justify-between mt-5 border-t">
                <div className="m-5">MatrixTech Labs</div>
                <div className="m-4 ">{navList}</div>
            </div>

            <div>
            <div className="flex justify-around flex-wrap">
                <div className="m-6">Email <p className="text-gray-500 hover:text-gray-300">matrixtechlabs@gmail.com</p> </div>
                <div className="m-6">Contact <p className="text-gray-500 hover:text-gray-300">1234567899</p></div>
                <div className="m-6">
                    Social Media
                    <div className="text-gray-500 ">
                        <p className="text-gray-500 hover:text-gray-300">Instagram</p>
                        <p className="text-gray-500 hover:text-gray-300">LinkedIn</p>
                        <p className="text-gray-500 hover:text-gray-300">Github</p>
                    </div> 
                </div>
            </div>
        </div>




        </div>
    );
}

export default Contact;