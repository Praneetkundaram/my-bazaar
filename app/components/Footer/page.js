export default function Footer() {
    return(
        <>
        <div className=" w-full bg-[#0757A7] text-white py-4 px-6">
            <p className="text-center text-sm">
                &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="text-white hover:underline">Privacy Policy</a>
                <a href="#" className="text-white hover:underline">Terms of Service</a>
                <a href="#" className="text-white hover:underline">Contact Us</a>
            </div>

        </div>
        </>
    )
}


