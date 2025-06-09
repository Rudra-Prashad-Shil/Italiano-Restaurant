const Testimonials = () => (
  <section className="max-w-3xl mx-auto py-16 px-4 text-center">
    <span className="text-amber-500 text-xl font-semibold block mb-2">Testimonials</span>
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-serif">Happy Clients Say</h2>
    <p className="text-gray-400 mb-8">
      Very fast delivery. I recommend to everyone. The food is very hot and fresh and also as tasty as in a restaurant. The application is very convenient and understandable.
    </p>
    <div className="flex items-center justify-center gap-4 mb-4">
      <button className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-xl">&#8592;</button>
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-14 h-14 rounded-full border-4 border-amber-400" />
      <button className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-xl">&#8594;</button>
    </div>
    <div>
      <div className="font-bold">Marco Bituchini</div>
      <div className="text-gray-400 text-sm">May 16, 2020</div>
    </div>
  </section>
);

export default Testimonials;