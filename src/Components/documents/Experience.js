import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import styles from './Documents.module.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  position: relative;
  background: linear-gradient(90deg, hsla(190, 68%, 50%, 1) 0%, hsla(239, 34%, 47%, 1) 100%);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
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

const AddButton = styled.button`
  padding: 8px 16px;
  margin: 16px;
  border: none;
  border-radius: 4px;
  background-color: #ffc107;
  color: white;
  cursor: pointer;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
`;

const ExperienceDetail = ({ experience, onDelete }) => {
  return (
    <Card>
      <h3>Company Name: {experience.companyName}</h3>
      <p>Duration: {experience.startDate.toLocaleDateString()} - {experience.endDate.toLocaleDateString()}</p>
      <p>Position: {experience.position}</p>
      {experience.document ? (
        <Button onClick={() => window.open(experience.document)}>View Document</Button>
      ) : (
        <p className={styles.tooltip}>Upload document to view</p>
      )}
      <Button onClick={() => onDelete(experience.id)} style={{ backgroundColor: '#dc3545' }}>Delete</Button>
    </Card>
  );
};

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [form, setForm] = useState({
    companyName: "",
    startDate: null,
    endDate: null,
    position: "",
    document: null
  });
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState("");

  const handleEdit = (file) => {
    if (file) {
      setForm({ ...form, document: URL.createObjectURL(file) });
    } else {
      console.error("No file selected or file type is incorrect");
    }
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleAddExperience = () => {
    setIsAdding(true);
  };

  const handleSubmit = () => {
    if (!form.companyName || !form.startDate || !form.endDate || !form.position) {
      setError("All fields are required");
      return;
    }

    if (form.startDate > form.endDate) {
      setError("End date cannot be earlier than start date");
      return;
    }

    const newExperience = {
      id: experiences.length + 1,
      ...form
    };

    setExperiences([...experiences, newExperience]);
    setForm({
      companyName: "",
      startDate: null,
      endDate: null,
      position: "",
      document: null
    });
    setIsAdding(false);
    setError("");
  };

  const handleDeleteExperience = (id) => {
    const updatedExperiences = experiences.filter(exp => exp.id !== id);
    setExperiences(updatedExperiences);
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/Documents');
  };

  return (
    <>
    <button className={styles.backButton} onClick={handleBack}><i className='fa fa-arrow-left'></i>Back</button>
    <Container>
      <h1>Work Experience Details</h1>
      <AddButton onClick={handleAddExperience}>Add Experience</AddButton>
      {isAdding && (
        <Form>
          <FormGroup>
            <Label>Company Name</Label>
            <Input
              type="text"
              value={form.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              placeholder="Enter company name"
            />
          </FormGroup>
          <FormGroup>
            <Label>Start Date</Label>
            <DatePicker
              selected={form.startDate}
              onChange={(date) => handleChange('startDate', date)}
              placeholderText="Select start date"
              dateFormat="yyyy/MM/dd"
            />
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <DatePicker
              selected={form.endDate}
              onChange={(date) => handleChange('endDate', date)}
              placeholderText="Select end date"
              dateFormat="yyyy/MM/dd"
            />
          </FormGroup>
          <FormGroup>
            <Label>Position</Label>
            <Input
              type="text"
              value={form.position}
              onChange={(e) => handleChange('position', e.target.value)}
              placeholder="Enter position"
            />
          </FormGroup>
          <FormGroup>
            <Label>Document</Label>
            <Input
              type="file"
              onChange={(e) => handleEdit(e.target.files[0])}
            />
          </FormGroup>
          <Button onClick={handleSubmit}>Submit</Button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </Form>
      )}
      <CardContainer>
        {experiences.map(experience => (
          <ExperienceDetail
            key={experience.id}
            experience={experience}
            onDelete={handleDeleteExperience}
          />
        ))}
      </CardContainer>
    </Container>
    </>
  );
};

export default Experience;
