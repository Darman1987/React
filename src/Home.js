import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'diego', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'armando', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'diego', id: 3 }
  ])

  return (
    <div className="home">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >{/*key attribute is mandatory */}
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}
 
export default Home;
