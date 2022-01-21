import React from 'react'
import classes from './CourseDescription.module.css'

const CourseDescription = () => {
    return (

        <div className={classes.CourseDescription}>
            <h3 className={classes.CourseDecsHeader}>Description</h3>
            <div className={classes.CourseLearn}>
                <h4 className={classes.TextCourse}>What You'll Learn on This Course</h4>
                <div className={classes.ListCourse}>
                    <ul className={classes.UnorderedList}>
                        <li>
                            React Hooks! (My favorite part of react!)
                        </li>
                        <li>Master React Router</li>
                        <li>React State Management Patterns</li>
                        <li>Work with tons of libraries and tools</li>
                        <li>React Design Patterns and Strategies</li>
                    </ul>
                    <ul className={classes.UnorderedList}>
                        <li>
                            The basics of React
                        </li>
                        <li>Drag &#38; Drop With React</li>
                        <li>Common React Router Patterns</li>
                        <li>Learn the ins and outs of JSS</li>
                        <li>Optimize React components</li>

                    </ul>
                </div>

            </div>
            <div className={classes.CourseFor}>
                <h3 className={classes.CourseDecsHeader}>Who This Course is for</h3>
                <h6 className={classes.CourseForText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed libero non augue maximus laoreet. Mauris maximus elit eu lacus cursus facilisis. Pellentesque eu elit odio. Integer ac egestas erat. Mauris fringilla ullamcorper tincidunt. Phasellus id libero volutpat, faucibus justo non, finibus metus. Phasellus suscipit leo vel odio tempus rhoncus. Nam semper lacus vel lacus interdum venenatis.
                    Nunc facilisis dolor quis lectus pharetra condimentum.
                    Nulla facilisi. Duis rutrum commodo est eget tristique.
                    Sed sollicitudin quam diam, luctus aliquet metus suscipit sed.
                    Maecenas ornare dapibus lectus, id cursus
                    arcu tempus id. Etiam diam elit, vulputate eget sollicitudin a, maximus id erat. Phasellus
                    volutpat malesuada metus ac semper. Nam luctus, quam rhoncus eleifend
                    pulvinar, odio turpis varius nisl, sed molestie tortor mauris quis felis. Aliquam id nulla
                    sit amet risus malesuada commodo at vel metus. Etiam sed malesuada magna.
                    Donec eget malesuada augue. Proin sit amet consequat tellus.
                    Donec vel interdum velit. Integer tempor lacus vel eros lobortis,
                    ut porttitor orci aliquet. Nunc porta fermentum sapien, eget venenatis orci
                    sodales quis. Ut ullamcorper augue nunc, in suscipit nulla finibus et.
                    Mauris efficitur orci vel efficitur elementum.</h6>
            </div>
        </div>
    )
}

export default CourseDescription
