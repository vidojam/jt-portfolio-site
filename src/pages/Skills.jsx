import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../layout/AppLayout.jsx";

import Icon1 from '../icons/git.ico';
import Icon2 from "../icons/mysql.ico";
import Icon3 from "../icons/node.ico";
import Icon4 from "../icons/js.ico";
import Icon5 from "../icons/npm.ico";
import Icon6 from "../icons/react.ico";
import Icon7 from "../icons/typescript.ico";
import Icon8 from "../icons/vs-code.ico";

const Skills = () => {
  const imagePath = process.env.PUBLIC_URL;

    return (
    <Layout>
      <Container id="skills">
        <Row>
          <Col>
            <p className="mySkillsTitle">Proficient in...</p>
            <img src={`${imagePath}/${Icon1}`} fluid alt="Icon 1" />
            <img src={`${imagePath}/${Icon2}`} alt="Icon 2" />
            <img src={`${imagePath}/${Icon3}`} alt="Icon 3" />
            <img src={`${imagePath}/${Icon4}`} alt="Icon 4" />
            <br />
            <img src={`${imagePath}/${Icon5}`} alt="Icon 5" />
            <img src={`${imagePath}/${Icon6}`} alt="Icon 6" />
            <img src={`${imagePath}/${Icon7}`} alt="Icon 7" />
            <img src={`${imagePath}/${Icon8}`} alt="Icon 8" />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Skills;
