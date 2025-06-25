const FirstOrderBanner = () => (
  <section
    className="text-white flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto rounded-3xl my-12 overflow-hidden relative"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1627461985459-51600559fffe?auto=format&fit=crop&w=1200&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="flex-1 z-10 bg-gray-900/40 py-16 px-8 rounded-3xl">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-serif">
        Make Your First Order And Get <span className="text-amber-400">50% Off</span>
      </h2>
      <p className="mb-4 font-semibold">Get it Delivered Right To Your Door.</p>
      <p className="mb-6 text-gray-300 max-w-md">
        If you order food delivery from us for the first time then we have a gift - 50% discount for you on the first order. You just need to register and order your favorite food.
      </p>
      <button className="bg-gradient-to-r from-amber-300 to-orange-400 text-white font-semibold px-8 py-3 rounded-full text-lg shadow hover:scale-105 transition">
        Order Products
      </button>
    </div>
  </section>
);

export default FirstOrderBanner;