import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleDelete = (id) => {
    console.log(id)
    const newBlogs = blogs.filter(blog => blog.id !== id);
    console.log(blogs)
    setBlogs(newBlogs);
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => res.json())
        .then(data => {
          setBlogs(data)
          setLoading(false)
        });
    }, 2000);
  }, []);

  return (
    <div className="home">
      {loading && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} title={'All Blogs !'}/>}
    </div>
  )
}

export default Home
