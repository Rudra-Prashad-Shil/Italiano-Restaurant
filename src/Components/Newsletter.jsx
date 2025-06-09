const Newsletter = () => (
  <section className="max-w-4xl mx-auto my-16 px-4">
    <div className="bg-gray-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
      <div>
        <h3 className="text-2xl font-bold mb-2">Newsletter</h3>
        <p className="text-gray-400">Don't miss promotions and discounts.</p>
      </div>
      <form className="flex flex-1 gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="rounded-full px-6 py-3 text-black flex-1 outline-none"
        />
        <button className="bg-gradient-to-r from-amber-300 to-orange-400 text-white font-semibold px-8 py-3 rounded-full text-lg shadow hover:scale-105 transition">
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

export default Newsletter;