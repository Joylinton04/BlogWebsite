import DisplayBlog from "../layout/home/displayBlog";


const Home = ({ blog,setBlog }) => {

    const filterCategory = (e) => {
        const filteredCategory = blog.filter(blogItem => blogItem.category === e.target.textContent)
        setBlog(filteredCategory)
        console.log(blog)
    }

  return (
    <div className='home'>
        <div className="top-section">
            <h1>Stories</h1>
            <ul>
                <li className="active">all</li>
                <li onClick={(e) => filterCategory(e)}>science</li>
                <li onClick={(e) => filterCategory(e)}>programming</li>
            </ul>
        </div>
        <div className="stories">
            {blog.length ? 
                <DisplayBlog blog={blog}/> :
                <p>Sorry, there are no posts to display</p>    
            }
        </div>
    </div>
  )
}

export default Home;