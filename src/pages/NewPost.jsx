import Form from '../component/Form'

const NewPost = ({blogSlug,setBlogSlug,blogCategory,setBlogCategory,setBlogAuthor,blogAuthor,blogPost,setBlogPost,blogAbout,setBlogAbout,handleSubmit}) => {

  return (
    <main className='newpost'>
      <h1>Create a new post</h1>
      <Form 
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
      />
    </main>
  )
}

export default NewPost;