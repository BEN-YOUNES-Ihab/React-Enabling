import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ContentWrapper = styled.div`
  margin-left: 228px;
`;

const Home = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  useEffect(() => {
    if (!role) {
      navigate('/');
    }
  }, [navigate, role]);


  return (
    <div>
      {role === 'Admin' ? (
        <>
          <Sidebar />
          <ContentWrapper>
            <Header />
            <Main />
            <Footer />
          </ContentWrapper>
        </>
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;

