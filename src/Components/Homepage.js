import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledHomeLink = styled(Link)`
  font-size: 40px;
  background: #f59494;
  display: inline-block;
  padding: 40px 80px;
  color: #fff;
  border-radius: 50%;
  text-decoration: none;
  transition: 0.3s ease all;
  text-transform: uppercase;

  &:hover {
  border-radius: 5px;
  background: #e77171;
}
`

export default function Home() {
    return(
        <div className="home">
            <StyledHomeLink className="home-link" to="/Picture">Show space Pics!</StyledHomeLink>
        </div>
    )
}