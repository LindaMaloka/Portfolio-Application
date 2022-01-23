import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
/*import { projects } from '../../constants/constants';*/
import { projects } from '../../constants/constantsv2';

const Projects = () => (
 /* <div>
    Projects
  </div>*/

  <section nopadding id ="projects">
    <SectionDivider/>
 
    <GridContainer>
      {projects.map(({id,image,title,description,tags,source,visit}) =>(
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>  
          

        </BlogCard>
        

      ))}


    </GridContainer>
  </section>

);

export default Projects;