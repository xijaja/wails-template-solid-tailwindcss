import { Icon } from "@iconify-icon/solid";
import { createSignal, onMount } from "solid-js";

export default function darkMode() {
  const [darkMode, setDarkMode] = createSignal(false);

  // 初始化主题模式
  onMount(() => {
    if (typeof localStorage !== 'undefined') {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        setDarkMode(true);
      }
    }
  });

  // 切换主题模式
	function toggleDarkMode() {
		if (darkMode()) {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
			setDarkMode(false);
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
			setDarkMode(true);
		}
  }
  
  return (
    <button class="text-2xl mt-1 hover:rotate-6" onclick={toggleDarkMode}>
      {darkMode()
        ? <Icon icon="icon-park:dark-mode" />
        : <Icon icon="icon-park:sun-one" />
      }
    </button>
  )
}