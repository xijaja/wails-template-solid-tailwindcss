import {For, JSX} from "solid-js";
import { MetaProvider, Title } from "@solidjs/meta";
import { Icon } from '@iconify-icon/solid';
import { A } from "@solidjs/router";
import DarkMode from "./DarkMode";

type Props = {
  title?: string; // 页面标题
  children?: JSX.Element; // 子组件
};

export default function Layout(props: Props) {
  const menu = [
    { text: "首页", href: "/home", icon: "material-symbols:home-app-logo" },
    { text: "用户", href: "/users", icon: "material-symbols:supervisor-account-outline-rounded" },
  ]

  return (
    <>
      {/* meta 元数据 */}
      <MetaProvider>
        <Title>{props.title || "幸运花防伪验证系统"}</Title>
      </MetaProvider>

      <main class="flex h-screen">
        <nav
          class="flex-none flex flex-col justify-between w-[70px] items-center text-center select-none z-20 bg-gray-50/10 dark:bg-slate-900/80"
          style="--wails-draggable:drag"
        >
          <div class="mt-12 my-4 flex flex-col gap-6 text-2xl text-gray-500 dark:text-gray-200">
            <For each={menu}>
              {(item) => (
                <A href={item.href} activeClass="text-blue-600 dark:text-blue-400">
                  <Icon icon={item.icon} />
                </A>
              )}
            </For>
          </div>

          <div class="my-4 flex flex-col gap-4 text-2xl text-gray-500 dark:text-gray-200">
            <DarkMode />
            {/* 设置 */}
            <A href="/setup" activeClass="text-blue-600 dark:text-blue-400">
              <Icon icon="material-symbols:menu-rounded" />
            </A>
          </div>
        </nav>

        <div class="pl-2 w-full bg-white dark:bg-gray-900/90">
          <div class="h-8"></div>
          <div class="overflow-y-auto h-screen p-4" style="--wails-draggable:none;">{props.children}</div>
        </div>
      </main>

    </>
  )
}