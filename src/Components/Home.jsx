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
                <div className="card-body">
                    <h2 className="card-title text-5xl font-semibold">We Deliver the Best Taste of Food</h2>
                    <span className="text-xl">Experience our expertly crafted dishes, made from the freshest ingredients.</span>
                    <div className="">
                        <form action="">
                            <input className="bg-white p-5 rounded-4xl text-black w-full" type="text" name="" id="" />
                            <button className="btn bg-orange-600 rounded-4xl p-5 text-white text-xl font-extralight md:absolute md:right-[3vw] md:top-31">search</button>
                        </form>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Home;