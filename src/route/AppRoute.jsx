import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import EditPost from '../pages/EditPost';
import NewPost from '../pages/NewPost';
import PostPage from '../pages/PostPage';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axiosRequest from '../hooks/ApiRequest';

const AppRoute = () => {
  const[blog, setBlog] = useState([])

  useEffect(()=>{
    const getData = async ()=> {
      try{
        const { data } = await axiosRequest.get('/post')
        //console.log(data)
        setBlog(data)
      }
      catch(err) {
        console.log(err.message)
      }
    }
    getData()
  },[])


  const [blogSlug, setBlogSlug] = useState('')
  const [blogCategory, setBlogCategory] = useState('')
  const [blogAuthor, setBlogAuthor] = useState('')
  const [blogPost, setBlogPost] = useState('')
  const [blogAbout, setBlogAbout] = useState('')

  const [editBlogSlug, setEditBlogSlug] = useState('')
  const [editBlogCategory, setEditBlogCategory] = useState('')
  const [editBlogAuthor, setEditBlogAuthor] = useState('')
  const [editBlogPost, setEditBlogPost] = useState('')
  const [editBlogAbout, setEditBlogAbout] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    //const newPost = [...blog, newBlog]
    //setBlog(newPost)
/*     navigate('/')
    setBlogSlug('')
    setBlogCategory('')
    setBlogAuthor('')
    setBlogPost('')
    setBlogAbout('') */

      try{
        const id = blog.length ? blog[blog.length - 1].id + 1 : 1
        const newBlog = {id:id, author: blogAuthor,slug: blogSlug, about: blogAbout, content: blogPost,isFeatured:true,category: blogCategory}
        const response = await axiosRequest.post('/post', newBlog)
        const newPost = [...blog, response.data]
        setBlog(newPost)
        
        navigate('/')
        setBlogSlug('')
        setBlogCategory('')
        setBlogAuthor('')
        setBlogPost('')
        setBlogAbout('')
      }
      catch (err) {
        console.log(err.message)
      }
  }


  const handleDelete = async (id) => { 
    try {
      await axiosRequest.delete(`/post/${id}`) 
      const newBlogList = blog.filter(blogItem => blogItem.id != id) 
      setBlog(newBlogList)
      navigate('/')
    }
    catch (err) {
      console.log(err.message)
    }
  }

  const handleEdit = async (id)=> {
    const updatedPost = {id:id, author:editBlogAuthor,slug:editBlogSlug, about:editBlogAbout, content:editBlogPost, category:editBlogCategory, isFeatured:true}
    const updatedblog = blog.map(blogItem => blogItem.id === id ? updatedPost : blogItem)
    setBlog(updatedblog)

    try{
      const response = await axiosRequest.put(`/post/${id}`, updatedPost)
      setBlog(blog.map((blogItem => blogItem.id === id ? response.data : blogItem)))
      navigate('/')
      console.log(blog)
    }
    catch(err) {
      console.log(err.message)
    }
  }



  return (
    <div>
      <Routes>
        <Route path="/" element={<Home blog={blog} setBlog={setBlog}/>} />
        <Route path="/blog/:id" element={<PostPage 
        blog={blog}
        handleDelete={handleDelete}
        />} />
        <Route path="/newpost" element={<NewPost
        blogSlug={blogSlug}
        setBlogSlug={setBlogSlug}
        blogCategory={blogCategory}
        setBlogCategory={setBlogCategory}
        blogAuthor={blogAuthor}
        setBlogAuthor={setBlogAuthor}
        blogPost={blogPost}
        setBlogPost={setBlogPost}
        blogAbout={blogAbout}
        setBlogAbout={setBlogAbout}
        handleSubmit={handleSubmit}
        />} />
        <Route path='/editpost/blog/:id' element={<EditPost
         blog={blog}
         editBlogSlug={editBlogSlug}
         setEditBlogSlug={setEditBlogSlug}
         editBlogCategory={editBlogCategory}
         setEditBlogCategory={setEditBlogCategory}
         editBlogAuthor={editBlogAuthor}
         setEditBlogAuthor={setEditBlogAuthor}
         editBlogPost={editBlogPost}
         setEditBlogPost={setEditBlogPost}
         editBlogAbout={editBlogAbout}
         setEditBlogAbout={setEditBlogAbout}
         handleEdit={handleEdit}
        />}/>
      </Routes>
    </div>
  )
}

export default AppRoute;