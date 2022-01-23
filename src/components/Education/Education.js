import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './EducationStyles';

const Education = () =>  (
 /* <div>
    Education
  </div>*/
  <Section id = "Education">
    <SectionDivider/>
    <SectionTitle >Education</SectionTitle>
    <SectionText>
    <b>Graduate Year:</b>  2016 <br/>
<b>University:</b><br/>
•	Tshwane University of Technology, Pretoria (Soshanguve Campus)<br/>
<b>Qualification:</b><br/>
•	Diploma in Software Engineering<br/>
<b>Achievements:</b><br/>
•	Student Mentoring.<br/>
•	Student Assistant<br/>
<b>Certificates:</b><br/>
<b>MICROSOFT CERTIFIED SOLUTION ASSOCIATE (MCSA)</b><br/>
   • 70-761 Querying Data with Transact-SQL <br/>
   • 70-762 Developing SQL Databases
<b>MICROSOFT CERTIFIED SOLUTION Professional (MCP)</b><br/>
•	Windows Server 2012 R2) 

    </SectionText>

  </Section>
);

export default Education;
