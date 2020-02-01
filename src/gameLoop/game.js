import { get } from 'svelte/store';
// Импортируем массив снарядов
import { bulletList } from '../stores/cannon';
// Импортируем массив врагов
import { enemyList } from '../stores/enemy';
// Импортируем обработчик удаления снарядов
import { removeBullet } from './cannon';
// Импортируем обработчик удаления врагов
import { removeEnemy } from './enemy';

// Запишем в константы размеры врагов и снарядов.
// Размер снаряда сделан чуть больше, чем наш svg, чтобы компенсировать расстояние,
// которое пройдет снаряд и враг за игровой цикл.
const enemyWidth = 30;
const bulletWidth = 5;
const enemyHeight = 30;
const bulletHeight = 8;

// Функция обработки столкновений
export function checkCollision() {
    get(bulletList).forEach(bullet => {
        get(enemyList).forEach(enemy => {
            if (
                bullet.x < enemy.x + enemyWidth &&
                bullet.x + bulletWidth > enemy.x &&
                bullet.y < enemy.y + enemyHeight &&
                bullet.y + bulletHeight > enemy.y
            ) {
                // Если произошло столкновение, то удаляем снаряд и врага с игрового поля
                removeBullet(bullet.id);
                removeEnemy(enemy.id);
            }
        });
    });
}
