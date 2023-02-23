import Layout from "@/Layouts/Layout";

export default function Contact({ auth }) {
    return (
        <Layout auth={auth} className=" bg-slate-50">
            <div className="min-h-screen w-4/5 mx-auto border-b-2 border-gray-200 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-md"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg border-2 border-rose-600 sm:rounded-md sm:p-20">
                        <div className="text-center pb-6">
                            <h1 className="text-3xl">Contact Us</h1>
                            <p className="text-gray-600">
                                Fill up the form below to send us a message.
                            </p>
                        </div>
                        <form action="" method="">
                            <input
                                class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:border-rose-600 focus:ring-rose-600"
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                            />
                            <input
                                class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:border-rose-600 focus:ring-rose-600"
                                type="email"
                                placeholder="Email"
                                name="Email"
                                required
                            />
                            <input
                                class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:border-rose-600 focus:ring-rose-600"
                                type="text"
                                placeholder="Number"
                                name="subject"
                                required
                            />

                            <textarea
                                class="shadow border mb-4 min-h-0 appearance-none rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:border-rose-600 focus:ring-rose-600 focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Message"
                                name="message"
                                required
                            ></textarea>

                            <input
                                type="hidden"
                                name="redirect"
                                value="https://web3forms.com/success"
                            />

                            <input
                                class="shadow uppercase text-sm bg-rose-500 hover:bg-rose-600 text-white w-full font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                value="submit"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
