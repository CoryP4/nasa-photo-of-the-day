import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledNavi = styled.div`
  background-color: rgba(22, 22, 22, 0.8);
  display: flex;
  justify-content: center;
`

const NaviLink = styled(Link)`
  color: #efefef;
  display: inline-block;
  padding: 3px 20px;
  font-size: 16px;
  text-decoration: none;
  transition: 0.3s ease all;

  &:hover {
    color: #f59494;
    transform: scale(1.1);
  }
`

export default function Navi() {
    return(
        <StyledNavi>
            <ul>
                <NaviLink to="/">Too much space.. TAKE ME BACK!</NaviLink>
            </ul>
        </StyledNavi>
    )
}