import { Link } from "react-router-dom";

const DisplayBlog = ({ blog }) => {
  return (
    <main className="blog">
        {blog.map((blogItem) =>
            blogItem.isFeatured && (
            <article className="post" key={blogItem.id}>
                <Link to={`/blog/${blogItem.id}`}>
                <p>{blogItem.category}</p>
                <h2>{blogItem.slug}</h2>
                <p>{blogItem.about}</p>
                <p className="author">by {blogItem.author}</p>
                </Link>
            </article>
            )
        )}
    </main>
  )
}

export default DisplayBlog;