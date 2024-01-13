import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='history' onClick={toggle}>History</SidebarLink>
                <SidebarLink to='algorithm' onClick={toggle}>Algorithm</SidebarLink>
                <SidebarLink to='applications' onClick={toggle}>Applications</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/encrypt'>Start Encrypting</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
