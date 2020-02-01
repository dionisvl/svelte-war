import { get } from 'svelte/store';
// Импортируем переменные врагов из хранилища
import { enemyList, lastEnemyAddedAt } from '../stores/enemy.js';

// Функция добавления врага
export function addEnemy() {
    // Если с момента добавления последнего врага прошло больше 2500 мс,
    // то добавить нового врага
    if (Date.now() - get(lastEnemyAddedAt) > 2500) {
        // Обновим временную метку последнего добавления
        lastEnemyAddedAt.set(Date.now());
        // Добавим врага со случайной координатой х от 1 до 499
        // (размер нашего игрового поля)
        enemyList.update(enemies => [
            ...enemies,
            {
                x: Math.floor(Math.random() * 449) + 1,
                y: 0,
                id: () => Math.random() + Date.now(),
            },
        ]);
    }
}

// Функция перемещения врага. Каждый игровой цикл перемещаем врага на 0.5
export function moveEnemy() {
    enemyList.update(enemyList =>
        enemyList.map(enemy => ({
            ...enemy,
            y: enemy.y + 0.5,
        })),
    );
}

// Удалить врага из массива по id, пригодится для обработки попаданий
export function removeEnemy(id) {
    enemyList.update(enemies => enemies.filter(enemy => enemy.id !== id));
}
