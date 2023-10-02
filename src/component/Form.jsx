

const Form = ({
    blogSlug,
    setBlogSlug,
    blogCategory,
    setBlogCategory,
    blogAuthor,
    setBlogAuthor,
    blogPost,
    setBlogPost,
    blogAbout,
    setBlogAbout,
    handleSubmit
}) => {
  return (
    <form>
        <div className="form">
            <div className="form-section-1">
                <input 
                    type="text"
                    placeholder="Blog slug"
                    value={blogSlug}
                    required
                    onChange={e => setBlogSlug(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Category"
                    value={blogCategory}
                    required
                    onChange={e => setBlogCategory(e.target.value)}
                />
            </div>
            <input 
                type="text" 
                placeholder="Author"
                value={blogAuthor}
                required
                onChange={e => setBlogAuthor(e.target.value)}
                className="author"
            />
            <textarea
                placeholder="Write your blog here"
                value={blogPost}
                required
                onChange={e => setBlogPost(e.target.value)}
                >
            </textarea>
            <textarea
                placeholder="Description"
                value={blogAbout}
                required
                onChange={e => setBlogAbout(e.target.value)}
                >
            </textarea>
            <button type="submit" onClick={(e)=> handleSubmit(e)}>Add Post</button>
        </div>
    </form>
  )
}

export default Form;