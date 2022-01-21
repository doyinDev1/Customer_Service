import React from 'react'
import classes from './CourseCurriculum.module.css'

const CourseCurriculum = () => {
  return (
    <div className={classes.CourseCurriculum}>
      <div className={classes.CourseOverviewCard}>
        <button
          className={classes.ModuleName}> Module One </button>
        <button
          className={classes.ModuleName}> Module Two</button>
        <button
          className={classes.ModuleName}> Module Three</button>
        <button
          className={classes.ModuleName}> Module Four</button>
      </div>
    </div>
  )
}

export default CourseCurriculum
