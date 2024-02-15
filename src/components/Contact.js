const Contact = () => {
    return (
        <div className="px-[30%] flex flex-col min-h-[80lvh]">
            <h1 className=" font-bold text-3xl p-4  text-center">Contact Us</h1>
            <form className="flex flex-col items-center">
                <input type="text" className="border border-black rounded-md text-center w-full py-4 my-4" placeholder="name"/>
                <input type="text" className=" border border-black rounded-md text-center w-full py-4 my-4" placeholder="message"/>
                <button className="border border-solid border-black rounded-md bg-green-100 p-2 m-2">Submit</button>
            </form>
            <div className="mt-auto">
                <p>mail</p>
                <p>Customer Care Number</p>
            </div>
            
        </div>
    )
}

export default Contact;