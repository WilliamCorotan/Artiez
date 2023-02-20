import { Footer } from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import TextInput from "@/Components/TextInput";

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="text-center pb-6">
                            <h1 className="text-3xl">Contact Us</h1>
                            <p className="text-gray-600">
                                Fill up the form below to send us a message.
                            </p>
                        </div>
                        <form action="" method="">
                            <TextInput
                                class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                            />
                            <TextInput
                                class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                placeholder="Email"
                                name="Email"
                                required
                            />
                            <TextInput
                                class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Number"
                                name="subject"
                                required
                            />

                            <Textarea
                                class="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Message"
                                name="message"
                                required
                            ></Textarea>

                            <TextInput
                                type="hidden"
                                name="redirect"
                                value="https://web3forms.com/success"
                            />

                            <TextInput
                                class="shadow bg-indigo-600 hover:bg-indigo-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                value="submit"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
