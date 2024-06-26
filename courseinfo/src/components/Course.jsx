import CourseTitle from './CourseTitle'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => (
  <div>
    <CourseTitle title={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

export default Course