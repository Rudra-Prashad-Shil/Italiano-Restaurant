const dishes = [
  {
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80",
    name: "Rib-Eye Steak",
    price: "$15.69"
  },
  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    name: "Top Sirloin Steak",
    price: "$25.39"
  },
  {
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
    name: "T-Bone Steak",
    price: "$18.99"
  },
  {
    img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    name: "Strip Steak",
    price: "$16.99"
  }
];

const PopularDishes = () => (
  <section className="max-w-6xl mx-auto py-16 px-4">
    <span className="text-amber-500 text-xl font-semibold block mb-2">Amazing taste</span>
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-serif">Popular Dishes</h2>
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {["Meat", "Pizza", "Fastfood", "Sushi", "Vegetarian Food"].map((cat, i) => (
        <button key={i} className="px-4 py-2 rounded-full border border-amber-400 text-amber-400 font-semibold bg-white hover:bg-amber-400 hover:text-white transition">{cat}</button>
      ))}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
      {dishes.map((dish, idx) => (
        <div key={idx} className="rounded-2xl overflow-hidden shadow-lg bg-white group relative">
          <img src={dish.img} alt={dish.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{dish.name}</h3>
            <div className="flex items-center justify-between">
              <span className="font-bold text-amber-500">{dish.price}</span>
              <button className="bg-amber-400 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-400 transition">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PopularDishes;