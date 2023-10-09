import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Container>
        <div className="module-wr">
          <div className="admin">
            <Link to="/admin">Admin</Link>
          </div>
          <div className="student">
            <Link to="/student">Student</Link>
          </div>
          <div className="teacher">
            <Link to="/teacher">Teacher</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Homepage;
