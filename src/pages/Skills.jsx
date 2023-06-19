import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../layout/AppLayout.jsx";

import gitIcon from '../icons/git.png';
import mysqlIcon from "../icons/mysql.ico";
import nodeIcon from "../icons/node.ico";
import jsIcon from "../icons/js.ico";
import npmIcon from "../icons/npm.ico";
import reactIcon from "../icons/react.ico";
import typescriptIcon from "../icons/typescript.ico";
import vscodeIcon from "../icons/vs-code.ico";

const Skills = () => {

  return (
    <Layout>
      <Container id="skills">
        <Row>
          <Col>
            <p className="mySkillsTitle">Proficient in...</p>
            <img src={gitIcon} fluid alt="Icon 1" />
            <img src={mysqlIcon} alt="Icon 2" />
            <img src={nodeIcon} alt="Icon 3" />
            <img src={jsIcon} alt="Icon 4" />
            <br />
            <img src={npmIcon} alt="Icon 5" />
            <img src={reactIcon} alt="Icon 6" />
            <img src={typescriptIcon} alt="Icon 7" />
            <img src={vscodeIcon} alt="Icon 8" />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Skills;
