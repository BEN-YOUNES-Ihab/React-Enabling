import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser, FaShoppingBasket } from 'react-icons/fa';
import logo from '../my-logo.png'
import { useNavigate } from 'react-router-dom';

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  background-color: #efefef;
  padding: 0 16px;
`;

const Logo = styled.img`
  height: 32px;
  margin-right: auto;
`;

const SearchWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Search = styled.input`
  width: 150px;
  max-width: 50%;
  margin: 0 8px;
  padding: 8px;
  border-radius: 4px;
  border: none;
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileIcon = styled(FaUser)`
  font-size: 20px;
  margin-right: 8px;
  cursor: pointer;
`;

const BasketIcon = styled(FaShoppingBasket)`
  font-size: 20px;
  margin-right: 8px;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  width: 120px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const DropdownMenuItem = styled.div`
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: #efefef;
  }
`;

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };
  
  const handleLogoutClick = () => {
    setShowDropdown(false);
    localStorage.clear();
    navigate('/');
  };
  
  return (
    <NavbarWrapper>
      <Logo src={logo} alt="My Logo" />
      <SearchWrapper>
        <Search type="text" placeholder="Search" />
      </SearchWrapper>
      <IconsWrapper>
        <BasketIcon />
        <ProfileIcon onClick={handleProfileClick} />
        {showDropdown && (
          <DropdownMenu>
            <DropdownMenuItem onClick={handleProfileClick}>
              My Account
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogoutClick}>
              Logout
            </DropdownMenuItem>
          </DropdownMenu>
        )}
      </IconsWrapper>
    </NavbarWrapper>
  );
}

export default Header;
