import { MdRoom, MdCall, MdEmail } from "react-icons/md";



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


    function Form_Submitted(){
        console.log("sdfdfd");
        const fname=document.getElementById("fname");
        const lname=document.getElementById("lname");
        const email=document.getElementById("email");
        
    };



    return (
        <div className=" bg-gray-900 text-white" >

            <div className="flex flex-row justify-around pb-14 flex-wrap">
                <div className=" flex-col">
                    <div className="flex text-7xl pt-20 pb-8 font-kanit">Contact Us</div>
                    <div className="flex max-w-xl  text-lg">We're excited to hear from you and discuss how our web development services can bring your digital vision to life. Whether you have a specific project in mind or just want to learn more about what we can offer, we're here to help.</div>
                </div>

                <div className="max-w-screen-md my-20 p-5 bg-slate-700 bg-opacity-10 rounded-[25px] backdrop-blur-2xl backdrop-saturate-100   ">

                    <form className="w-full">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    First Name
                                </label>
                                <input className="appearance-none block w-full bg-transparent text-white border-b  border-gray-500 py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-100 " id="grid-first-name fname" type="text" placeholder="Jane" />

                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Last Name
                                </label>
                                <input className="appearance-none block w-full bg-transparent text-white border-b border-gray-500  py-3 px-4 leading-tight focus:outline-none focus:border-gray-100" id="grid-last-name lname" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Email Address
                                </label>
                                <input className="appearance-none block w-full bg-transparent text-white border-b border-gray-500  py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-100" id="grid-email email" type="email" placeholder="********@*****.**" />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Your Message
                                </label>
                                <textarea rows="3" id="msg" className="max-h-64 min-h-[50px] appearance-none block w-full bg-transparent text-white border-b border-gray-500  py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-100">

                                </textarea>
                            </div>
                            <div className="flex justify-between w-full px-3">
                                <div className="md:flex md:items-center" />
                                <button  onClick={Form_Submitted} className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded-[15px]" type="submit">
                                    Send Message
                                </button>
                            </div>

                        </div>

                    </form>
                </div>
            </div>

            <div className=" text-black">
                <div className="flex justify-center text-3xl text-white"><b>Reach Us</b></div>
                <div className="flex flex-row justify-center text-lg font-bold py-28 flex-wrap">
                    <div className="bg-white h-40 w-52 m-5 flex flex-col justify-center">
                        <div className="mb-3 flex justify-center "><MdEmail /></div>
                        <div className="flex justify-center">Email Us</div>
                        <div className="text-sm flex justify-center">matrixtechlabs@gmail.com</div>
                    </div>
                    <div className="bg-white h-40 w-52 m-5 flex flex-col justify-center">
                        <div className="mb-3 flex justify-center "><MdCall /></div>
                        <div className="flex justify-center">Call Us</div>
                        <div className="text-sm flex justify-center">1234567890</div>
                    </div>
                    <div className="bg-white h-40 w-52 m-5 flex flex-col justify-center">
                        <div className="mb-3 flex justify-center "><MdRoom /></div>
                        <div className="flex justify-center">Visit Us</div>
                        <div className="text-sm flex justify-center">Surat, Gujarat</div>
                    </div>

                </div>

            </div>


            <div>
                <div className="flex justify-around flex-wrap mt-5 border-t">
                    <div className="flex justify-center flex-col items-center m-6">
                        Email <p className="text-gray-500 hover:text-gray-300">matrixtechlabs@gmail.com</p>
                    </div>
                    <div className="flex justify-center flex-col items-center m-6">
                        Contact <p className="text-gray-500 hover:text-gray-300">1234567899</p>
                    </div>
                    <div className="m-6">
                        &copy; matrixtechlabs
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    &copy; matrixtechlabs
                </div>
            </div>
        </div>
    );
}

export default Contact;