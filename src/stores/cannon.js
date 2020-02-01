// импортируем модуль изменяемой переменной
import { writable } from "svelte/store";

// Отвечает за текущее направление, в котором нужно поворачивать пушку.
// Будет принимать значения 'left', 'right', null, устанавливается нашими кнопками
export const direction = writable(null);

// Текущий угол поворота пушки
export const angle = writable(0);

export const isFiring = writable(false);
export const lastFireAt = writable(0);
export const bulletList = writable([]);
