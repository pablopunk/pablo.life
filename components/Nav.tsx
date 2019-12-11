import React from 'react'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'

const links = [
  {
    label: 'home',
    href: '/'
  },
  {
    label: 'portfolio',
    href: '/portfolio'
  },
  {
    label: 'about me',
    href: '/me'
  },
  {
    label: 'contact',
    href: '/contact'
  }
]

// from https://codepen.io/inyoung1/pen/gZVdeX
const borderKeyframes = keyframes`
  0%, 100% {
    clip-path: polygon(0 0, calc(100% - (33.3333333333px)) calc(0% + (33.3333333333px)), 100% 100%, calc(0% + (33.3333333333px)) calc(100% - (33.3333333333px)));
  }
  50% {
    clip-path: polygon(calc(0% + (33.3333333333px)) calc(0% + (33.3333333333px)), 100% 0, calc(100% - (33.3333333333px)) calc(100% - (33.3333333333px)), 0 100%);
  }
`

const CenterFlex = styled.div`
  margin: 10vw 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const PsycoBox = styled.div`
  width: 700px;
  height: 100px;
  position: relative;
  background-color: ${props => props.theme.bg};
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  &:after,
  &:before {
    mix-blend-mode: multiply;
    filter: none;
    z-index: -1;
    content: '';
    width: calc(100% + (50px * 2));
    height: calc(100% + (50px * 2));
    position: absolute;
    display: block;
    animation: ${borderKeyframes} 10s ease-in-out infinite;
    transform: translateX(-50px) translateY(-50px);
  }
  &:after {
    animation-delay: -5s;
    background-color: ${props => props.theme.fgContrast};
    clip-path: polygon(
      0 0,
      calc(100% - (33.3333333333px)) calc(0% + (33.3333333333px)),
      100% 100%,
      calc(0% + (33.3333333333px)) calc(100% - (33.3333333333px))
    );
  }
  &:before {
    background-color: ${props => props.theme.fgContrast2};
    clip-path: polygon(
      calc(0% + (33.3333333333px)) calc(0% + (33.3333333333px)),
      100% 0,
      calc(100% - (33.3333333333px)) calc(100% - (33.3333333333px)),
      0 100%
    );
  }
`

const StyledNav = styled.nav`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  div {
    margin: 2rem;
  }
  a {
    padding: 1rem;
    font-size: 2rem;
    text-transform: uppercase;
    font-family: Raleway, sans-serif;
    font-weight: bold;
    &:after {
      content: '';
      position: absolute;
      width: 0;
      background-color: ${props => props.theme.fgContrast};
      height: 3px;
      margin-top: 3rem;
      transform: translateX(-50%);
      left: 50%;
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    }
    &:hover:after,
    &:focus:after,
    &:active:after {
      width: 80%;
      background-color: ${props => props.theme.fgContrast2};
    }
    &:focus:after {
      background-color: ${props => props.theme.fgContrast};
    }
  }
`

const Nav = () => (
  <CenterFlex>
    <PsycoBox>
      <StyledNav>
        {links.map(link => (
          <div key={link.href} style={{ position: 'relative' }}>
            <Link href={link.href}>
              <a>{link.label}</a>
            </Link>
          </div>
        ))}
      </StyledNav>
    </PsycoBox>
  </CenterFlex>
)

export default Nav
