import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin-left: 228px;
`;
const App = () => {
  return (
    <div>
      <Sidebar />
      <ContentWrapper>
        <Header />
        <Main />
        <Footer />
      </ContentWrapper>
    </div>
  );
}

export default App;
