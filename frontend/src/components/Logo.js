import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../media/images/go4 Cinema logo.jpg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="/">
                <img src={logo} width="150" alt="Go4 Cinema" />
            </Wrapper>
        )
    }
}

export default Logo