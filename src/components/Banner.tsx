import heroImage from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <div className="hero min-h-[500px] px-4 lg:px-8 py-12">
            <div className="hero-content flex-col lg:flex-row justify-between w-full max-w-6xl gap-10">
                <div className="max-w-xl">
                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                        <span className="text-slate-900">Build Your Ideal</span>
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="py-4 text-slate-500">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    <div className="flex gap-3 mt-2">
                        <button className="btn border-none text-white bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90">
                            Explore Technologies
                        </button>
                        <button className="btn btn-outline border-slate-300 text-slate-700 hover:bg-slate-100">
                            Learn More
                        </button>
                    </div>
                </div>

                <div>
                    <img
                        src={heroImage}
                        className="w-72 lg:w-96"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;