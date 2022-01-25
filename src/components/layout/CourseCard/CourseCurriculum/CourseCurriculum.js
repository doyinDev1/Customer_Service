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
            <Iframe/>
          </Modal.Body>
        </Modal>

      </div>
    </div>
  )
}

export default CourseCurriculum
