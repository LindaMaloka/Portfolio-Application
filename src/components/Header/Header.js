import Link from 'next/link';
import React from 'react';
import { AiFillAlert, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
/* <div>
    Header
  </div>
  */

  <Container>
    <Div1>
      <Link href="/">
      
      <a style = {{ display : "flex", alignItems: "center", color:'white',marginBottom:'50;'}}>
        <DiCssdeck size = "3rem"/> <Span>Portfolio</Span>
      </a>
      </Link>
    </Div1>
<Div2>

  <li>

</li>
<li>
  <Link href="#Ojectives">
    <NavLink>Objectives</NavLink>
  </Link>
</li>
<li>
  <Link href="#Education">
    <NavLink>Education</NavLink>
  </Link>
</li>
<li>
  <Link href="#Skills">
    <NavLink>Skills</NavLink>
  </Link>
</li>
<li>
  <Link href="#About ">
    <NavLink>About </NavLink>
  </Link>
</li>
</Div2>

<Div3>  
  <SocialIcons href="https://github.com/">
    <AiFillGithub size = "3rem" />
  </SocialIcons>
  <SocialIcons href="https://linkedin.com/">
    <AiFillLinkedin size = "3rem" />
  </SocialIcons>
  <SocialIcons href="https://www.sovtech.co.za/">
    <AiFillAlert size = "3rem" />
  </SocialIcons>
</Div3>





  </Container>


);

export default Header;
