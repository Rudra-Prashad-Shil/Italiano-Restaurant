const features = [
  {
    icon: (
      <svg className="w-10 h-10 text-amber-400 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
    ),
    title: "Discount System",
    desc: "We have a favorable discount system for our regular customers."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-amber-400 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    ),
    title: "Express Delivery",
    desc: "The hottest food & fastest delivery to any location of your city."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-amber-400 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8h18M8 8V6a4 4 0 1 1 8 0v2m-9 4h10v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8z"/></svg>
    ),
    title: "50+ Restaurants",
    desc: "Large selection of restaurants and cafes throughout the country."
  }
];

const WhyChooseUs = () => (
  <section className="max-w-5xl mx-auto py-16 px-4 text-center">
    <span className="text-amber-500 text-xl font-semibold block mb-2">The reason why</span>
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-serif">Why People Choose Us</h2>
    <p className="text-gray-400 max-w-2xl mx-auto mb-10">
      We have many advantages but we will highlight only some of them, look below.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <div key={i} className="text-center">
          {f.icon}
          <h3 className="font-bold text-lg mb-2">{f.title}</h3>
          <p className="text-gray-500">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;