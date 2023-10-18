import { Toaster } from "solid-toast";
import { Route, Router, Routes } from "@solidjs/router";
import LoginPage from "@pages/Login";
import UsersPage from "@pages/Users";
import NotFondPage from "@pages/404";
import SetupPage from "@pages/Setup";
import HomePage from "@pages/Home";


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* 根路径 */}
          <Route path="/" element={<HomePage />} />
          {/* 登录 */}
          <Route path="/login" element={<LoginPage />} />
          {/* 首页 */}
          <Route path="/home" element={<HomePage />} />
          {/* 用户 */}
          <Route path="/users" element={<UsersPage />} />
          {/* 设置 */}
          <Route path="/setup" element={<SetupPage />} />
          {/* 404 */}
          <Route path="*" element={<NotFondPage />} />
        </Routes>
      </Router>

      {/* 🍞 吐司 */}
      {/* 使用时：onclick={()=>toast("烤面筋、烤面筋、烤面筋可得劲啦～") */}
      {/* 也可以使用：toast.success()、toast.error()、toast.loading() */}
      <Toaster position="top-center" gutter={8} />
    </>
  );
}
