
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
`;

export const Header = styled.div`
  background: #2196F3;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 10px;
`;

export const Container = styled.div`
  display: flex;
  padding: 20px;
`;

export const MainContent = styled.div`
  flex: 3;
  background: white;
  padding: 15px;
  border-radius: 5px;
`;

export const Sidebar = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const Box = styled.div`
  background: white;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const LoginBox = styled(Box)`
  input {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    width: 100%;
    padding: 8px;
    background: #2196F3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background: #1976D2;
  }

  .logout-btn {
    background: #FF5722;
  }
`;

export const Ads = styled(Box)`
  img {
    width: 100%;
  }
`;

export const FeatureList = styled(Box)`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 5px 0;
  }

  a {
    text-decoration: none;
    color: #2196F3;
    font-weight: bold;
  }
`;

