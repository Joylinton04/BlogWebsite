import DisplayBlog from "../layout/home/DisplayBlog";


const Home = ({ blog,setBlog }) => {

  return (
    <div className='home'>
        <div className="top-section">
            <h1>Stories</h1>
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