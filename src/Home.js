import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'diego', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'armando', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'diego', id: 3 }
  ])

  const [name, setName] = useState('Charl');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  //By default, it runs both after the first render and after every update.
  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
    console.log(name);
  })

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('Chris')}>change name</button>
    </div>
  );
}
 
export default Home;
