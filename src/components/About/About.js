import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './AboutStyles';
import { projects } from '../../constants/About';

const About = () =>  (
   /*<div>
    Objectives
  </div>*/


  
  <Section id = "About">
    <SectionDivider/>
    <SectionTitle >About Me</SectionTitle>
    <SectionText>
      <b>Name:</b>   Linda<br/>
      <b>SurName:</b>   Maloka<br/>
      <b>ID:</b>   9201260646083<br/>
      <b>Email:</b>   linda_maloka@yahoo.com<br/>
      <b>Gender:</b>   Female<br/>
      <b>Nationality:</b>   Repbulic of South Africa <br/>
      <b>Address:</b>   42 st Andrews,<br/>Jackal Creek Golf Estate,<br/>Northriding,Roodepoort<br/> 2169<br/>
      <b>Contact Detail:</b>   0799164523 <br/>
    


    </SectionText>
    

  </Section>







);

export default About;


