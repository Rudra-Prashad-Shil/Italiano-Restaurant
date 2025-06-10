const posts = [
  {
    img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    tag: "Recipes",
    title: "The Traditional Recipe Of Apple Pie",
    author: "Antonio Reffis",
    date: "May 16, 2020"
  },
  {
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
    tag: "Recipes",
    title: "Famous Vanilla Bean Cupcakes",
    author: "Carlos Boisi",
    date: "May 16, 2020"
  },
  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    tag: "Recipes",
    title: "The Most Tasty Cake We've Ever Made",
    author: "Nicole Mano",
    date: "May 12, 2020"
  }
];

const LatestPosts = () => (
  <section className="max-w-6xl mx-auto py-16 px-4">
    <span className="text-amber-500 text-xl font-semibold block mb-2">Our blog</span>
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-serif">Latest Posts & Articles</h2>
    <p className="text-gray-400 max-w-2xl mx-auto mb-10">
      Here you can find recipes from the most famous chefs and read useful information.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {posts.map((post, idx) => (
        <div key={idx} className="rounded-2xl overflow-hidden shadow-lg bg-white group relative">
          <img src={post.img} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute top-3 left-3">
            <span className="bg-amber-400 text-white text-xs font-semibold px-3 py-1 rounded-full">{post.tag}</span>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default LatestPosts;