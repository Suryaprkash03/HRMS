import React from 'react'
import styles from './Documents.module.css'
import Card from './Card'
import { IoSchool } from 'react-icons/io5'
import { FaBusinessTime } from 'react-icons/fa'
import { PiCertificateFill } from 'react-icons/pi'
const Documents = () => {
  return (
    <div className={`${styles.container}`}>
            <div className={`${styles.card_container} row`}>
                <Card name={"Education Details"} icon={<IoSchool />} link={"Education"} />
                <Card name={"Experience Details"}  icon={<FaBusinessTime />} link={"Experience"} />
                <Card name={"Certification Details  "}  icon={<PiCertificateFill />} link={"Certificates"} />
            </div>
    </div>
  )
}

export default Documents