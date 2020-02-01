// импортируем модуль изменяемой переменной
import { writable } from "svelte/store";

// Запущен в данный момент игровой цикл или нет, может принимать значения true/false
export const isPlaying = writable(false);
