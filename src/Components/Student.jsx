import './style.css'
import { useContext } from 'react'
import DataContext from './DataContext'
import { Link } from 'react-router-dom'

function Student() {
  const context = useContext(DataContext)
  return (
    <div className="student-page">
      <div className="student-header">
        <h1>Student Details</h1>
        <Link className='link inner-link'  to='/add-page' ><div id='add-new-btn'>Add New Student</div></Link> 
      </div>
      <div className="student-table">
        <div className="student-table-content">
          <div className='student-name'>Name</div>
          <div>Age</div>
          <div>Course</div>
          <div>Batch</div>
          <div >Change</div>
        </div>
        <hr />
        {context.data.map((item, index) => (
          <>
            <div key={index} className="student-table-content">
              <div className='student-name'>{item.name}</div>
              <div>{item.age}</div>
              <div>{item.course}</div>
              <div>{item.batch}</div>
              <Link to='/edit-page' state={{ data: index }}>Edit </Link>
            </div>
            <hr /></>
        ))}
      </div>
    </div>
  )
}

export default Student