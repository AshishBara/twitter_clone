import { signIn } from "next-auth/react";
import Image from "next/image";

function Login({ providers }) {
    return (
        <div className="flex flex-col items-center space-y-20 pt-48">
            <Image
                src="https://rb.gy/ogau5a"
                width={150}
                height={150}
                objectFit="contain"
            />
            <div>
                {Object.values(providers).map(provider => (
                    <div key={provider.name}>
                        {/* https://devdojo.com/tailwindcss/buttons#_ */}
                        {/* <a onClick={() => signIn(provider.id, { callbackUrl: "/"})} href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                            <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Sign in with {provider.name}</span>
                        </a> */}

                        <button className="bg-white p-3.5 text-gray-700 rounded-xl hover:bg-gray-700 hover:text-white transition duration-150 ease-out" onClick={() => signIn(provider.id, {callbackUrl: "/"})}>Signin with {provider.name}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Login
