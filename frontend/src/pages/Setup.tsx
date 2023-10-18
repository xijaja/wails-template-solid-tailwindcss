import Layout from "@components/Layout";
import { A, useNavigate } from "@solidjs/router";
import btnClass from "@utils/button";
import { Show } from "solid-js";
import toast from "solid-toast";

export default function SetupPage() {
  const navigate = useNavigate(); // 使用导航钩子
  const token = localStorage.getItem("token"); // 从本地存储中获取 token

  async function logout() {
    toast("👋 您已退出，再见～");
    navigate("/login"); // 使用导航钩子, 跳转到登录页
  }

  return (
    <Layout>
      <div class="space-y-4">
      <div class="flex gap-4 items-center">
        <img src="src/assets/logo.svg" alt="logo" class="w-10 h-10 rounded-full select-none" />
        <h1 class="text-2xl">Wails And Solid</h1>
      </div>

      <div class="flex items-end gap-4">
        <p>版本：v1.0</p>
        <p class="p-1 text-sm bg-slate-100 rounded-lg text-red-400">有新版本</p>
      </div>

      <Show when={token} fallback={<A href="/login" class={btnClass()} onClick={logout}>登录</A>}>
        <button class={btnClass("red")} onClick={logout}>退出登录</button>
      </Show>
      </div>
    </Layout>
  )
}