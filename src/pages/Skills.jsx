import React from 'react';
import { Container } from "react-bootstrap";
import Layout from "../layout/AppLayout.jsx";
import Icon1 from '/Users/josetorres/code/ux-ui-intern-projects/jt-portfolio-site/src/icons/git.ico';
import Icon2 from '/Users/josetorres/code/ux-ui-intern-projects/jt-portfolio-site/src/icons/mysql.ico';
import Icon3 from '/Users/josetorres/code/ux-ui-intern-projects/jt-portfolio-site/src/icons/node.ico';
import Icon4 from '/Users/josetorres/code/ux-ui-intern-projects/jt-portfolio-site/src/icons/npm.ico';
import Icon5 from '/Users/josetorres/code/ux-ui-intern-projects/jt-portfolio-site/src/icons/react.ico';
import Icon6 from '/Users/josetorres/code/ux-ui-intern-projects/jt-portfolio-site/src/icons/typescript.ico';
import Icon7 from '/Users/josetorres/code/ux-ui-intern-projects/jt-portfolio-site/src/icons/vs-code.ico';

const Skills = () => {
  return (
    <Layout>
      <Container id="skills">
       
          <img src={Icon1} alt="Icon 1" />
          <img src={Icon2} alt="Icon 2" />
          <img src={Icon3} alt="Icon 3" />
          <img src={Icon4} alt="Icon 4" />
          <img src={Icon5} alt="Icon 5" />
          <img src={Icon6} alt="Icon 6" />
          <img src={Icon7} alt="Icon 7" />
      
      </Container>
    </Layout>
  );
};

export default Skills;