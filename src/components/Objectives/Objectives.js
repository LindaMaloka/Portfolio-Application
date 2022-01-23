import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './ObjectivesStyles';

const Objectives = () =>  (
  /*<div>
    Objectives
  </div>*/

  <Section id = "Objectives">
    <SectionDivider/>
    <SectionTitle >Objectives</SectionTitle>
    <SectionText>
    I consider myself an all-rounder, I know that I can achieve anything that I set my mind to, I aim to see myself being a system, integrating myself with different skills that will surely advance me to the next level. I want to see myself acquiring any skill that comes across me, because our qualifications and knowledge directs us in the right path but choosing your own path can only be determined by ourselves. I want to offer the skills that I have acquired through my educational level and work industry wise with other organizations; furthermore I seek mentorship to become a great leader and senior personal. Lastly one achievement that I always try to promote is peace amongst every colour and with your assistance we can make it happen and conquer. Let the colour of our skin not be the barrier of everyone’s happiness. Giving back to the community will always be a never-ending goal.


    </SectionText>

    <SectionTitle >Why I want to be a developer at SovTech</SectionTitle>
    <SectionText>
      
    <b> I want to be a developer at SovTech:</b> <br/>
      •	To enhance my development skills<br/>
      •	To Learn new technologies<br/>
      •	Develop on different platforms<br/>
      •	To introduce new innovative ideas that will bring software solutions<br/>
      •	Learn  and apply Team work skills<br/>
    I would like to be part of the dedicated team that will ensure project delivery, gaining industrial experience, understanding deployment processes and product innovation.
    </SectionText>
    <Button onClick={()=> window.location = 'https://www.sovtech.co.za/'}>Learn More About SovTech</Button>

  </Section>



);

export default Objectives;
