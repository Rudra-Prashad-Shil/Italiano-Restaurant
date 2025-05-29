import Banner from '../assets/Banner.jpg';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <div className="card bg-base-100 image-full w-full shadow-sm brightness-200">
                <figure>
                    <img
                        src={Banner}
                        alt="Shoes" />
                </figure>
                <div className="card-body mt-5 md:mt-15 lg:mx-auto">
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

            
        </div>
    );
};

export default Home;