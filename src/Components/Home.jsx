import Banner from '../assets/Banner.jpg';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <div className="card image-full min-h-[550px] max-h-[850px] shadow-sm brightness-200 relative">
                <figure>
                    <img
                        src={Banner}
                        className="w-full "
                        alt="Shoes" />
                </figure>
                <div className="card-body mb-10 mt-5 md:mt-15 lg:mt-30 lg:mx-auto">
                    <h2 className="card-title text-5xl font-semibold">We Deliver the Best Taste of Food</h2>
                    <span className="text-xl mt-3">Experience our expertly crafted dishes, made from the freshest ingredients.</span>
                    <div className="relative mt-7 md:mt-15 lg:ml-24">
                        <form action="">
                            <input className="bg-white p-5 rounded-4xl text-black w-full md:max-w-lg" type="text" name="" id="" />
                            <button className="btn bg-orange-600 rounded-4xl sm:px-10 py-6  text-white sm:text-xl font-extralight absolute right-3 top-1.5 md:right-auto md:left-[370px]">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* Floating Cards */}
            <div className="relative -mt-10 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
                    <div className="card max-w-96 bg-gray-800 card-md shadow-sm mx-auto">
                        <div className="card-body p-10">
                            <h2 className="text-amber-500 text-xl">Step 1</h2>
                            <h2 className="card-title text-2xl font-bold text-white">Choose Location</h2>
                            <p className="text-gray-400">Enter your address or choose your current location using app</p>
                        </div>
                    </div>
                    <div className="card max-w-96 bg-gray-800 card-md shadow-sm mx-auto">
                        <div className="card-body p-10">
                            <h2 className="text-amber-500 text-xl">Step 2</h2>
                            <h2 className="card-title text-2xl font-bold text-white">Order Favourite Food</h2>
                            <p className="text-gray-400">Choose your Favourite Food & your preferred payment method</p>
                        </div>
                    </div>
                    <div className="card max-w-96 bg-gray-800 card-md shadow-sm mx-auto">
                        <div className="card-body p-10">
                            <h2 className="text-amber-500 text-xl">Step 3</h2>
                            <h2 className="card-title text-2xl font-bold text-white">Fast Delivery</h2>
                            <p className="text-gray-400">Get it delivered at your doorstep within an hour or less</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;