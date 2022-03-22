import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  // const { isLoading } = useAuth();

  useEffect(() => {
    const url = "https://rocky-mountain-61787.herokuapp.com/blogs/";
    fetch(url)
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-10">
        <h1 className="text-center py-10 font-medium text-2xl text-gray-800">
          Medical Blogs
        </h1>
        <div class="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {/* Card */}

          {blogs.map((blog) => (
            <div class="rounded overflow-hidden shadow-md">
              <img class="w-full" src={blog.img} alt={blog.title} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{blog.title}</div>
                <p class="text-gray-700 text-base">
                  {blog.description.slice(0, 250)}...
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{blog.tag1}
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{blog.tag2}
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{blog.tag3}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
