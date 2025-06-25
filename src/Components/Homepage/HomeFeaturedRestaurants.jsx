const featured = [
  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    label: "Restaurant",
    title: "Bulgarian Restaurant",
  },
  {
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
    label: "Asian Food",
    title: "Sushi Taste",
  },
  {
    img: "https://images.unsplash.com/photo-1732807542073-4986cef2c681?auto=format&fit=crop&w=400&q=80",
    label: "Cafe",
    title: "Hot Pastry Cafe",
  },
  {
    img: "https://images.unsplash.com/photo-1612528443849-93d29841db4f?auto=format&fit=crop&w=400&q=80",
    label: "Pub",
    title: "Beer Power",
  },
];

const HomeFeaturedRestaurants = () => (
  <section className="max-w-6xl mx-auto mt-24 px-4">
    <div className="text-center mb-10">
      <span className="text-amber-500 text-xl font-semibold block mb-2">Featured</span>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-3 font-serif">Restaurants & Cafes</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        The best restaurants and cafes that have been working with us for a long time.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-10">

      {featured.map((item, idx) => (
        <div key={idx} className="rounded-2xl overflow-hidden shadow-lg bg-white group relative">

          <img src={item.img} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute top-3 left-3">
            <span className="bg-amber-400 text-white text-xs font-semibold px-3 py-1 rounded-full">{item.label}</span>
          </div>

          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <span className="bg-white/80 rounded-full p-2 shadow">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400" viewBox="0 0 24 24"><path d="M3 8h18M8 8V6a4 4 0 1 1 8 0v2m-9 4h10v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8z" /></svg>
            </span>

            <span className="bg-white/80 rounded-full p-2 shadow">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
            </span>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
          </div>
        </div>
      ))}

    </div>
    <div className="flex justify-center">
      <button className="bg-gradient-to-r from-amber-300 to-orange-400 text-white font-semibold px-8 py-3 rounded-full text-lg shadow hover:scale-105 transition">
        View All List
      </button>
    </div>
  </section>
);

export default HomeFeaturedRestaurants;