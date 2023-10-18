import Layout from "@components/Layout";
import { useNavigate } from "@solidjs/router";

export default function RootPage() {
  const navigate = useNavigate();

  // 如果已经登录则跳转到首页
  if (localStorage.getItem("token")) {
    navigate("/home");
  } else {
    navigate("/login");
  }

  return (
    <Layout>
      <p>this is root page</p>
    </Layout>
  )
}
