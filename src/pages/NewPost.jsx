

const NewPost = ({blogSlug,setBlogSlug,blogCategory,setBlogCategory,setBlogAuthor,blogAuthor,blogPost,setBlogPost,blogAbout,setBlogAbout,handleSubmit}) => {

  return (
    <main className='newpost'>
      <h1>Create a new post</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form">
            <div className="form-section-1">
                <input
                    type="text"
                    placeholder="Blog slug"
                    value={blogSlug}
                    onChange={e => setBlogSlug(e.target.value)}
                    required
                />
                <input 
                    type="text"
                    placeholder="Category"
                    value={blogCategory}
                    onChange={e => setBlogCategory(e.target.value)}
                    required
                />
            </div>
            <input
                type="text" 
                placeholder="Author"
                value={blogAuthor}
                onChange={e => setBlogAuthor(e.target.value)}
                className="author"
                required
            />
            <textarea
                placeholder="Write your blog here"
                value={blogPost}
                onChange={e => setBlogPost(e.target.value)}
                required
                >
            </textarea>
            <textarea
                placeholder="Description"
                value={blogAbout}
                onChange={e => setBlogAbout(e.target.value)}
                required
                >
            </textarea>
            <button type="submit" onClick={() => handleSubmit()}>Add Post</button>
        </div>
    </form>
    </main>
  )
}

export default NewPost;