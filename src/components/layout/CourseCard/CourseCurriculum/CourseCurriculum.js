import React from 'react'
import classes from './CourseCurriculum.module.css'
import { useState } from 'react'
import Iframe from 'react-iframe';
import { Modal } from 'react-bootstrap';


const CourseCurriculum = () => {

  const [IframeModal, setIframeModal] = useState(false);

return (
    <div className={classes.CourseCurriculum}>
      <div className={classes.CourseOverviewCard}>
        <button
          onClick={() => {
            setIframeModal(true);
          }}
          className={classes.ModuleName}> Module One </button>

        <Modal show={IframeModal} fullscreen onHide={() => setIframeModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Module 1</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          	<Iframe
								url="https://learningplatform.sandbox.9ijakids.com/gamezip/Email_Essentials/story.html"
								// url={`https://learningplatform.sandbox.9ijakids.com/ModuleFolders/${urlLinks}/Going%20The%20Extra%20Mile/story.html`}
								// position="absolute"
								width="95%"
								// id={selectedModule.moduleID}
								// className="myClassname"
								height="95%"
							/>
          </Modal.Body>
        </Modal>
        {/* The%20Power%20To%20Make%20A%20Difference/A%20Powerful%20Word */}
      </div>
    </div>
  )
}

export default CourseCurriculum
