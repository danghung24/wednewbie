import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeContainer,
  Header,
  Container,
  MainContent,
  Sidebar,
  Box,
  LoginBox,
  Ads,
  FeatureList,
} from "./New.styled";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "./username" && password === "123456") {
      setIsLoggedIn(true);
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <HomeContainer>
      {/* Header */}
      <Header>
        🏠 Trang chủ | ℹ️ Thông tin
      </Header>

      <Container>
        {/* Cột Chính */}
        <MainContent>
          <Box>
            <h2>📢 THÔNG BÁO</h2>
          </Box>
        </MainContent>

        {/* Sidebar */}
        <Sidebar>
          {/* Đăng nhập / Đăng xuất */}
          <LoginBox>
            {isLoggedIn ? (
              <>
                <h3>ĐĂNG NHẬP</h3>
                <p>Tài khoản: <strong>N22DCCN136</strong></p>
                <p>Họ và tên: <strong>Đặng Quốc Hưng</strong></p>
                <button className="logout-btn" onClick={handleLogout}>🔄 Đăng xuất</button>
              </>
            ) : (
              <>
                <h3>ĐĂNG NHẬP</h3>
                <input
                  type="text"
                  placeholder="Nhập tài khoản"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>🔑 Đăng nhập</button>
              </>
            )}
          </LoginBox>

          {/* Tính năng */}
          <FeatureList>
            <h3>⚙️ TÍNH NĂNG</h3>
            <ul>
              <li>🔔 <a href="#">Thông báo từ ban quản trị <span style={{color: "red"}}>(1)</span></a></li>
              <li>📚 <a href="#">Xem chương trình đào tạo</a></li>
              <li>📝 <a href="#">Xem môn học tiên quyết</a></li>
              <li>📌 <a href="#">Đăng ký môn học</a></li>
              <li>📋 <a href="#">Đăng ký môn nguyên vọng</a></li>
              <li>💰 <a href="#">Xem học phí</a></li>
              <li>🧾 <a href="#">Hóa đơn điện tử</a></li>
              <li>📅 <a href="#">Xem thời khóa biểu tuần</a></li>
              <li>📆 <a href="#">Xem thời khóa biểu học kỳ</a></li>
              <li>📅 <a href="#">Xem lịch thi</a></li>
            </ul>
          </FeatureList>

          {/* Quảng cáo */}
          <Ads>
            <h3>📢 QUẢNG CÁO</h3>
            <img src="https://via.placeholder.com/200x100" alt="Quảng cáo" />
          </Ads>
        </Sidebar>
      </Container>
    </HomeContainer>
  );
};

export default Home;
