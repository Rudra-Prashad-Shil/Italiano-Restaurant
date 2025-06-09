const OrderAppBanner = () => (
  <section className="bg-gray-900 text-white py-16 px-4 rounded-3xl max-w-6xl mx-auto my-12 flex flex-col md:flex-row items-center justify-between gap-8">
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-serif">
        Make Orders With <span className="text-amber-400">Our Application</span>
      </h2>
      <ul className="mb-6 space-y-2">
        <li>
          <span className="font-bold text-amber-400">Order and pay in a few minutes</span>
          <br />
          <span className="text-gray-300">Choose food and pay for the order in a couple of clicks online, also choose your current location using GPS.</span>
        </li>
        <li>
          <span className="font-bold text-amber-400">Check Delivery Status</span>
          <br />
          <span className="text-gray-300">Follow the status of your order in real time and also track the delivery path until you get it.</span>
        </li>
      </ul>
      <div className="flex gap-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12" />
        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-12" />
      </div>
    </div>
    <img
      src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80"
      alt="App"
      className="w-80 md:w-96 rounded-2xl shadow-lg object-cover"
      style={{ maxHeight: 320 }}
    />
  </section>
);

export default OrderAppBanner;