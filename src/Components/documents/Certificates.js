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

const CertificateDetail = ({ certificate, onDelete }) => {
  return (
    <Card>
      <h3>Course Title: {certificate.courseTitle}</h3>
      <p>Duration: {certificate.startDate.toLocaleDateString()} - {certificate.endDate.toLocaleDateString()}</p>
      <p>Course Provider: {certificate.courseProvider}</p>
      {certificate.document ? (
        <Button onClick={() => window.open(certificate.document)}>View Document</Button>
      ) : (
        <p className={styles.tooltip}>Upload document to view</p>
      )}
      <Button onClick={() => onDelete(certificate.id)} style={{ backgroundColor: '#dc3545' }}>Delete</Button>
    </Card>
  );
};

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [form, setForm] = useState({
    courseTitle: "",
    startDate: null,
    endDate: null,
    courseProvider: "",
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

  const handleAddCertificate = () => {
    setIsAdding(true);
  };

  const handleSubmit = () => {
    if (!form.courseTitle || !form.startDate || !form.endDate || !form.courseProvider) {
      setError("All fields are required");
      return;
    }

    if (form.startDate > form.endDate) {
      setError("End date cannot be earlier than start date");
      return;
    }

    const newCertificate = {
      id: certificates.length + 1,
      ...form
    };

    setCertificates([...certificates, newCertificate]);
    setForm({
      courseTitle: "",
      startDate: null,
      endDate: null,
      courseProvider: "",
      document: null
    });
    setIsAdding(false);
    setError("");
  };

  const handleDeleteCertificate = (id) => {
    const updatedCertificates = certificates.filter(cert => cert.id !== id);
    setCertificates(updatedCertificates);
  };

  const navigate = useNavigate();

  const handleBack = () => {

    navigate('/Documents')
  };

  return (
    <>
    <button className={styles.backButton} onClick={handleBack}><i className='fa fa-arrow-left'></i>Back</button>
    <Container>
      <h1>Certificate Details</h1>
      <AddButton onClick={handleAddCertificate}>Add Certificate</AddButton>
      {isAdding && (
        <Form>
          <FormGroup>
            <Label>Course Title</Label>
            <Input
              type="text"
              value={form.courseTitle}
              onChange={(e) => handleChange('courseTitle', e.target.value)}
              placeholder="Enter course title"
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
            <Label>Course Provider</Label>
            <Input
              type="text"
              value={form.courseProvider}
              onChange={(e) => handleChange('courseProvider', e.target.value)}
              placeholder="Enter course provider"
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
        {certificates.map(certificate => (
          <CertificateDetail
            key={certificate.id}
            certificate={certificate}
            onDelete={handleDeleteCertificate}
          />
        ))}
      </CardContainer>
    </Container>
    </>
  );
};

export default Certificates;
