import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">
          Find The Job That <br />
          Fits Your Life
        </h1>
        <p className="home-job-description">
          Millions of peoples that are searching for jobs,salary
          information,company reviews.Find that jobs that fits your ability and
          potential
        </p>
        <button type="button" className="job-button">
          Find Jobs
        </button>
      </div>
    </div>
  </>
)
export default Home
