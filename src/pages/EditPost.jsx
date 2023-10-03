import { useParams } from "react-router-dom";
import { useEffect } from "react";

const EditPost = ({
  blog,editBlogSlug,setEditBlogSlug,editBlogCategory,setEditBlogCategory,editBlogAuthor,setEditBlogAuthor,editBlogPost,setEditBlogPost,editBlogAbout,setEditBlogAbout,handleEdit
}) => {
  const { id } = useParams()
  const post = blog.find(blogItem => (blogItem.id).toString() === id)
  useEffect(() => {
    setEditBlogAbout(post.about)
    setEditBlogSlug(post.slug)
    setEditBlogAuthor(post.author)
    setEditBlogPost(post.content)
    setEditBlogCategory(post.category)
  },[post])


  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form">
            <div className="form-section-1">
                <input
                    type="text"
                    placeholder="Blog slug"
                    value={editBlogSlug}
                    onChange={e => setEditBlogSlug(e.target.value)}
                    required
                />
                <input 
                    type="text"
                    placeholder="Category"
                    value={editBlogCategory}
                    onChange={e => setEditBlogCategory(e.target.value)}
                    required
                />
            </div>
            <input
                type="text" 
                placeholder="Author"
                value={editBlogAuthor}
                onChange={e => setEditBlogAuthor(e.target.value)}
                className="author"
                required
            />
            <textarea
                placeholder="Write your blog here"
                value={editBlogPost}
                onChange={e => setEditBlogPost(e.target.value)}
                required
                >
            </textarea>
            <textarea
                placeholder="Description"
                value={editBlogAbout}
                onChange={e => setEditBlogAbout(e.target.value)}
                required
                >
            </textarea>
            <button type="submit" onClick={() => handleEdit(post.id)}>Add Post</button>
        </div>
    </form>
    </div>
  )
}

export default EditPost;