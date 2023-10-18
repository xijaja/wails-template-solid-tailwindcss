import { A } from "@solidjs/router";
import Layout from "@components/Layout";

export default function NotFondPage() {
  return (
    <Layout>
      <div class="font-bold text-center flex flex-col gap-5 pt-4">
        <div class="text-4xl">😢</div>
        <h1 class="text-2xl ">404 - 页面不存在</h1>
        <p>
          你访问的页面不存在，{" "}
          <A class="text-blue-400 hover:underline" href="/home">
            返回首页
          </A>{" "}
          吧！
        </p>
      </div>
    </Layout>
  );
}
