import { useState } from "react";
import BlogList from "./BlogList"; //import component BlogList

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'diego', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'armando', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'diego', id: 3 }
  ])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />{/*Using BlogList component */}
    </div>
  );
}
 
export default Home;