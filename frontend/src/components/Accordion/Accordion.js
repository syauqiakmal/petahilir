import React, { useState } from "react";
import './Accordion.css';

// Accordion Component
const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {data.map((section, sectionIndex) => (
        <div key={sectionIndex} className="accordion-section">
          {/* Section Header */}
          <div
            className={`accordion-header ${
              activeIndex === sectionIndex ? "active" : ""
            }`}
            onClick={() => toggleAccordion(sectionIndex)}
          >
            <h3>{section.title}</h3>
            <span>{activeIndex === sectionIndex ? "▲" : "▼"}</span>
          </div>

          {/* Section Content */}
          {activeIndex === sectionIndex && (
            <div className="accordion-content">
              {/* Description above the table */}
              {section.description && (
                <p className="accordion-description">{section.description}</p>
              )}

              {/* Table */}
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Peraturan Perundang-Undangan</th>
                    <th>Tentang</th>
                  </tr>
                </thead>
                <tbody>
                  {section.items.map((item, itemIndex) => (
                    <tr key={itemIndex}>
                      <td>{item.no}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;