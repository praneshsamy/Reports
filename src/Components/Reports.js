import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Dropdown, Card, Button } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Reports = ({ projects, villas, reports }) => {
  const [showReports, setShowReports] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showVillas, setShowVillas] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [selectedVillas, setSelectedVillas] = useState(villas[0]);
  const [selectedReports, setSelectedReports] = useState([]);

  const handleReportToggle = (report) => {
    setSelectedReports((prevReports) =>
      prevReports.includes(report)
        ? prevReports.filter((r) => r !== report)
        : [...prevReports, report]
    );
  };

  return (
    <Card className="p-4 shadow-lg rounded-3" style={{ width: "350px" }}>
      <h5 className="mb-3">Export Reports</h5>

      <Form.Group className="mt-3">
        <Form.Label>Select Project</Form.Label>
        <Dropdown show={showProjects} onToggle={() => setShowProjects(!showProjects)}>
          <Dropdown.Toggle  variant="outline-secondary"   bsPrefix="custom-dropdown-toggle"   className="w-100 d-flex justify-content-between align-items-center"  >
            {selectedProject} {showProjects ? <FaChevronUp /> : <FaChevronDown />}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {projects.map((project, index) => (
              <Dropdown.Item key={index} onClick={() => setSelectedProject(project)}>
                {project}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>

     
      <Form.Group className="mt-3">
        <Form.Label>Select Villas</Form.Label>
        <Dropdown show={showVillas} onToggle={() => setShowVillas(!showVillas)}>
          <Dropdown.Toggle variant="outline-secondary"  bsPrefix="custom-dropdown-toggle" className="w-100 d-flex justify-content-between align-items-center" >
            {selectedVillas} {showVillas ? <FaChevronUp /> : <FaChevronDown />}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {villas.map((villa, index) => (
              <Dropdown.Item key={index} onClick={() => setSelectedVillas(villa)}>
                {villa}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>


      <Form.Group className="mt-3">
        <Form.Label>Select Reports</Form.Label>
        <Button variant="outline-secondary"  className="w-100 d-flex justify-content-between align-items-center" onClick={() => setShowReports(!showReports)}  >
          {selectedReports.length > 0 ? 
          `${selectedReports.length} Reports Selected`:
           "Select Reports"}{" "}
          {showReports ? <FaChevronUp /> : <FaChevronDown />}
        </Button>
        {showReports && (
          <Card className="p-2 mt-2">
            {reports.map((report, index) => (
              <Form.Check key={index}  type="checkbox"  label={report}  checked={selectedReports.includes(report)}  onChange={() => handleReportToggle(report)}   />
            ))}
          </Card>
        )}
      </Form.Group>
      <Button className="mt-3" variant="primary" onClick={() => console.log(selectedReports)}> Export Reports</Button>
    </Card>
  );
};

export default Reports;
