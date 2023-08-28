function Contact() {
    return (
        <div className="h-screen bg-gray-800 text-white " >


            <div className="max-w-screen-md mx-auto p-5 bg-slate-600 rounded-[25px] backdrop-blur-2xl backdrop-saturate-100   ">

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
        </div>
    );
}

export default Contact;