import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 228px;
  height: 100vh;
  position: fixed;
  left: 0;
  background-color: aquamarine;
`;

const Sidebar = () => {
  return <SidebarWrapper />;
};

export default Sidebar;