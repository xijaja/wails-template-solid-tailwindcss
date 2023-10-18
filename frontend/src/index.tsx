/* @refresh reload */
import { render } from 'solid-js/web';
// @ts-ignore
import('preline')
import './index.css';
import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);
