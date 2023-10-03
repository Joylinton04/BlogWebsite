import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PostPage = ({ blog, handleDelete }) => {
  const { id } = useParams()
  
  const post = blog.find(blog => (blog.id).toString() === id)
  return (
    <section className="postpage">
        {post && 
            <article className="display-post">
                <h2>{post.slug}</h2>
                <p className="post-content">{post.content}</p>
                <p className="author--">by {post.author}.</p>
                <div className="button">
                    <button className="editButton">
                    <Link to={`/editpost/blog/${id}`}>Edit Post</Link></button>
                    <button className="deleteButton" onClick={() => handleDelete(id)}>
                    <Link>Delete Post</Link></button>
                </div>
            </article>
        }
    </section>
  )
}

export default PostPage;