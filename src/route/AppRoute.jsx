import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import EditPost from '../pages/EditPost';
import NewPost from '../pages/NewPost';
import PostPage from '../pages/PostPage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const AppRoute = () => {
  const[blog, setBlog] = useState([
    {
        id: 1,
        author: 'Joylinton',
        about: 'react',
        slug: 'React is fun',
        about: 'the blog Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere natus officia quisquam aliquid nesciunt accusantium exercitationem animi assumenda explicabo aspernatur adipisci voluptas velit, eius fugit nobis! Perspiciatis, impedit aspernatur?',
        content: "Firstly, Reacts popularity is unmatched. Developed and maintained by Facebook, it has gained widespread adoption in the industry. Many major companies, including Airbnb, Netflix, and WhatsApp, use React for their web applications. Learning React opens doors to a vast array of job opportunities and career advancement.Secondly, React's component-based architecture simplifies web development. It encourages modularization, making code more organized and maintainable. Developers can build complex user interfaces by composing reusable components, leading to more efficient development processes and fewer bugs.Thirdly, React's virtual DOM (Document Object Model) is a game-changer. It enhances performance by updating only the parts of a webpage that need changing, reducing unnecessary re-renders. This results in faster and smoother user experiences, a critical aspect of modern web development.Furthermore, React's strong community and ecosystem are invaluable resources for learners. Countless tutorials, libraries, and tools are available, making it easier to grasp the technology and find solutions to common challenges. React's vibrant community ensures continuous support and updates.Lastly, React's versatility extends beyond web development. React Native, a framework built upon React, enables developers to create mobile applications for iOS and Android using the same codebase, simplifying the transition into mobile app development.Furthermore, React's strong community and ecosystem are invaluable resources for learners. Countless tutorials, libraries, and tools are available, making it easier to grasp the technology and find solutions to common challenges. React's vibrant community ensures continuous support and updates.",
        isFeatured: true,
        category: 'programming'
    },
    {
        id: 2,
        author: 'Joylinton',
        about: 'react',
        slug: 'React is fun',
        about: 'the blog Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere natus officia quisquam aliquid nesciunt accusantium exercitationem animi assumenda explicabo aspernatur adipisci voluptas velit, eius fugit nobis! Perspiciatis, impedit aspernatur?',
        content: 'the blog Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere natus officia quisquam aliquid nesciunt accusantium exercitationem animi assumenda explicabo aspernatur adipisci voluptas velit, eius fugit nobis! Perspiciatis, impedit aspernatur?',
        isFeatured: true,
        category: 'science'
    },
    {
        id: 3,
        author: 'Joylinton',
        slug: 'React is fun',
        about: 'the blog Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere natus officia quisquam aliquid nesciunt accusantium exercitationem animi assumenda explicabo aspernatur adipisci voluptas velit, eius fugit nobis! Perspiciatis, impedit aspernatur?',
        content: 'the blog Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere natus officia quisquam aliquid nesciunt accusantium exercitationem animi assumenda explicabo aspernatur adipisci voluptas velit, eius fugit nobis! Perspiciatis, impedit aspernatur?',
        isFeatured: true,
        category: 'science'
    }
  ])

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


  const handleSubmit = () => {
    const id = blog.length ? blog[blog.length - 1].id + 1 : 1
    const newBlog = [...blog, {id:id, author: blogAuthor,slug: blogSlug, content: blogPost, category: blogCategory, about: blogAbout,isFeatured:true}]
      setBlog(newBlog)

      navigate('/')
      setBlogSlug('')
      setBlogCategory('')
      setBlogAuthor('')
      setBlogPost('')
      setBlogAbout('')
  }


  const handleDelete = (id) => {
    const newBlogList = blog.filter(blogItem => blogItem.id != id) 
    setBlog(newBlogList)
    console.log(newBlogList)
    navigate('/')
  }

  const handleEdit = (id)=> {
    const updatedPost = {id:id, author:editBlogAuthor,slug:editBlogSlug, about:editBlogAbout, content:editBlogPost, category:editBlogCategory, isFeatured:true}

    const updatedblog = blog.map(blogItem => blogItem.id === id ? updatedPost : blogItem)

    setBlog(updatedblog)
    console.log(blog)
    navigate('/')
    console.log(id)
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