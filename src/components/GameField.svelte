<script>
    import Cannon from "./Cannon.svelte";
    import Bullet from "./Bullet.svelte";
    // импортируем компонент врагов
    import Enemy from "./Enemy.svelte";

    import { bulletList } from "../stores/cannon";
    // импортируем список врагов из хранилища
    import { enemyList } from "../stores/enemy";
</script>

<style>
    .container {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        max-height: 100%;
    }
</style>

<div class="container">
    <svg viewBox="0 0 480 800">
        <!-- Добавим итерацию по нашему массиву врагов -->
        {#each $enemyList as enemy (enemy.id)}
            <Enemy {enemy} />
        {/each}
        {#each $bulletList as bullet (bullet.id)}
            <Bullet {bullet} />
        {/each}
        <Cannon />
    </svg>
</div>
