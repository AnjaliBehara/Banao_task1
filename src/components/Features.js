import React from "react";

const Features = () => {
  return (
    <div className="features">
      <header className="text-center mb-4">
        <h1 className="text-primary">My Responsive Page</h1>
        <p className="text-muted">Built with React + Bootstrap 5</p>
      </header>

      <div className="row">
        <div className="col-md-6 col-sm-12 mb-3">
          <div className="p-3 border rounded bg-light">
            <h3>Left Section</h3>
            <p>This content will take half screen on desktop, full on mobile.</p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-3">
          <div className="p-3 border rounded bg-light">
            <h3>Right Section</h3>
            <p>Resize the window to see responsiveness.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
