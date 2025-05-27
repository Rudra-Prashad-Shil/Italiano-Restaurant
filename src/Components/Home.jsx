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
                    <p className="text-xl">Experience our expertly crafted dishes, made from the freshest ingredients.</p>
                    <div className="card-actions justify-end">
                        <form action="">
                            <button className="btn hover:bg-linear-to-r from-amber-400 to-orange-500">search</button>
                        </form>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Home;