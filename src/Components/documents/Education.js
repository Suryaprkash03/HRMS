// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './Documents.module.css'
const Card = styled.div`
position: relative;
  background: linear-gradient(90deg, hsla(190, 68%, 50%, 1) 0%, hsla(239, 34%, 47%, 1) 100%);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 8px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.disabled ? '#ff8484' : '#007BFF'};
  color: white;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const EditButton = styled.button`
  padding: 8px 16px;
  margin: 8px;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: white;
  cursor: pointer;
`;

const EducationDetail = ({ level, certificate, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <Card>
            <h3 style={{ color: "white" }}>{level}</h3>
            {isEditing ? (
                <input type="file" onChange={e => { onEdit(e.target.files[0]); setIsEditing(false); }} />
            ) : (
                certificate ?
                    <Button disabled={!certificate} onClick={() => certificate && window.open(certificate)}>
                        View
                    </Button> : <p className={styles.tooltip}>upload documents to view</p>

            )}
            <EditButton onClick={() => setIsEditing(true)}>Upload</EditButton>
        </Card>
    );
};

const Education = () => {
    const [details, setDetails] = useState({
        '10th std Documents': null,
        '12th std/Diploma Documents': null,
        'College Documents': null
    });

    const handleEdit = (level, file) => {
        const newDetails = { ...details, [level]: URL.createObjectURL(file) };
        console.log(newDetails)
        setDetails(newDetails);
    };

    return (
        <div className="conatiner">
            <h1>Education Details</h1>
            <div className={`${styles.card_container}`}>
                {Object.keys(details).map(level => (
                    <EducationDetail
                        key={level}
                        level={level}
                        certificate={details[level]}
                        onEdit={(file) => handleEdit(level, file)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Education;
