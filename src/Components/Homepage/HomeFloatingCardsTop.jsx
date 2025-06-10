const HomeFloatingCardsTop = () => {
    return (
        <div>
            <section className="relative -mt-10 flex justify-center">
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
            </section>
        </div>
    );
};

export default HomeFloatingCardsTop;