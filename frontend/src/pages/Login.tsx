import { Show, createSignal } from "solid-js";
import btnClass from "@utils/button";
import { inputClass } from "@utils/inputClass";
import { useNavigate } from "@solidjs/router";
import toast from "solid-toast";


export default function LoginPage() {
  const navigate = useNavigate(); // 导航钩子
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [errMsg, setErrMsg] = createSignal("");

  async function login() {
    setErrMsg('') // 清空错误信息
    if (username().length < 5 || username().length > 12) {
      setErrMsg('用户名长度应在 5 至 12 位之间')
      return;
    }
    if (password().length < 6 || password().length > 18) {
      setErrMsg('密码长度应在 6 至 18 位之间')
      return;
    }
    // todo 执行登录操作
    // 登录成功
    localStorage.setItem("token", "there_is_user_token_1234567890"); // 将 token 存储到本地
    toast.success("👋 欢迎回来～");
    navigate("/home"); // 跳转到首页
  }

  return (
    <main style="--wails-draggable:drag" class="w-full h-screen">
      <div class="pt-52">
        <div class="mx-auto w-96 space-y-6 bg-white p-12 rounded-lg">
          <h1 class="text-center text-2xl font-semibold">登录</h1>
          <input type="text" name="username" id="username" minLength={4} placeholder="账户" required class={inputClass} onChange={(e) => setUsername(e.target.value) && setErrMsg('')} />
          <input type="password" name="password" id="password" minLength={4} placeholder="密码" required class={inputClass} onChange={(e) => setPassword(e.target.value) && setErrMsg('')} />
          <button type="submit" class={btnClass() + ' w-full'} onclick={login}>登录</button>
          <Show when={errMsg()}>
            <p class="text-sm text-red-600 text-center">{errMsg()}</p>
          </Show>
        </div>
      </div>
    </main>
  )
}
