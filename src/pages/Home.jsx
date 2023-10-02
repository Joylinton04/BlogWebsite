import DisplayBlog from "../layout/home/displayBlog";


const Home = ({ blog }) => {

  return (
    <div className='home'>
        <div className="top-section">
            <h1>Stories</h1>
            <ul>
                <li className="active">all</li>
                <li>science</li>
                <li>Programming</li>
            </ul>
        </div>
        <div className="stories">
            {blog.length ? 
                <DisplayBlog blog={blog}/> :
                <p>sorry are no posts to display</p>    
            }
        </div>
    </div>
  )
}

export default Home;