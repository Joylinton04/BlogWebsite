

const Form = ({
    Slug,
    setSlug,
    Category,
    setCategory,
    Author,
    setAuthor,
    Post,
    setPost,
    About,
    setAbout,
    handleFunction,
    post
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <div className="form">
            <div className="form-section-1">
                <input
                    type="text"
                    placeholder="Blog slug"
                    value={Slug}
                    onChange={e => setSlug(e.target.value)}
                    required
                />
                <input 
                    type="text"
                    placeholder="Category"
                    value={Category}
                    onChange={e => setCategory(e.target.value)}
                    required
                />
            </div>
            <input
                type="text" 
                placeholder="Author"
                value={Author}
                onChange={e => setAuthor(e.target.value)}
                className="author"
                required
            />
            <textarea
                placeholder="Write your blog here"
                value={Post}
                onChange={e => setPost(e.target.value)}
                required
                >
            </textarea>
            <textarea
                placeholder="Description"
                value={About}
                onChange={e => setAbout(e.target.value)}
                required
                >
            </textarea>
            <button type="submit" onClick={() => handleFunction(post.id)}>Add Post</button>
        </div>
    </form>
  )
}

export default Form;