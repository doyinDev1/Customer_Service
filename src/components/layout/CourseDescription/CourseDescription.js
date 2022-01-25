import React from 'react'
import classes from './CourseDescription.module.css'

const CourseDescription = (props) => {
    const listed = props.location.list
    return (

        <div className={classes.CourseDescription}>
            <h3 className={classes.CourseDecsHeader}>Description</h3>
            <div className={classes.CourseLearn}>
                <h4 className={classes.TextCourse}>What You'll Learn on This Course</h4>
                <div className={classes.ListCourse}>
                    <ul className={classes.UnorderedList}>
                        {listed.map((list, index) => (
                            <li key={list.index}>{list}</li>
                        ))}
                    </ul>
                </div>

            </div>
            <div className={classes.CourseFor}>
                <h3 className={classes.CourseDecsHeader}>Who This Course is for</h3>
                <h6 className={classes.CourseForText}>{props.location.courseFor}</h6>
            </div>
        </div>
    )
}

export default CourseDescription
