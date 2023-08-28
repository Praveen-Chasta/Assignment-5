import {MdLocationOn} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const SimilarJobs = props => {
  const {similarJobData} = props
  const {
    companyLogoUrl,
    employmentType,

    id,
    jobDescription,
    location,
    rating,
    title,
  } = similarJobData

  console.log(similarJobData)

  return (
    <li className="similar-job-li-container">
      <div className="img-job-title-container">
        <img
          className="company-job-logo"
          src={companyLogoUrl}
          alt="similar job company logo"
        />
        <div className="title-job-rating-container">
          <h1 className="title-job-heading">{title}</h1>
          <div className="star-job-rating-container">
            <AiFillStar className="star-job-icon" />
            <p className="rating-job-text">{rating}</p>
          </div>
        </div>
      </div>
      <div className="second-part-job-container">
        <h1 className="description-job-heading">Description</h1>
        <p className="description-job">{jobDescription}</p>
      </div>
      <div className="location-job-details-container">
        <div className="location-job-container">
          <MdLocationOn className="location-job-icon" />
          <p className="location-job">{location}</p>
        </div>
        <div className="employment-job-type-icon">
          <p className="job-type">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobs
