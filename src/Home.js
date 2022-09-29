import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "my new website", body: "lorem ipsem", author: "mario", id: 1},
    {title: "welcome pary", body: "lorem ipsem", author: "yoshi", id: 2},
    {title: "web dev top tips", body: "lorem ipsem", author: "mario", id: 3},
  ]);


  const handleDelete = (id) => {
    console.log(id)
    const newBlogs = blogs.filter(blog => blog.id !== id);
    console.log(blogs)
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log("use effect ran")
  })

  return (
    <div className="home">
      <BlogList blogs={blogs} title={"All Blogs !"} handleDelete={handleDelete}/>
    </div>
  );
}

export default Home;
