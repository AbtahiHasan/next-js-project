

const NewsLetter = () => {
    return (
        <section className="container bg-slate-300 h-[150px] flex justify-center items-center mt-[140px]">
            <form className="max-w-[500px]">
                <h2 className="text-center font-bold text-2xl my-5">News Letter</h2>
                <input type="text" className="w-[70%] h-[40px] bg-transparent outline-none border border-black px-3" placeholder="example@gmail.com"/>
                <button className="w-[30%] text-white  h-[40px] bg-indigo-600">Subscribe</button>
            </form>
        </section>
    );
};

export default NewsLetter;