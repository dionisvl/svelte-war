<script>
    import IconButton from "./IconButton.svelte";
    import LeftArrow from "../assets/LeftArrow.svelte";
    import RightArrow from "../assets/RightArrow.svelte";
    import Bullet from "../assets/Bullet.svelte";
    // импортируем переменную направления поворота
    import { direction, isFiring  } from "../stores/cannon.js";

    // создаем обработчики событий
    const resetDirection = () => direction.set(null);
    const setDirectionLeft = () => direction.set("left");
    const setDirectionRight = () => direction.set("right");

    // Добавим обработчики нажатия кнопки огонь
    const startFire = () => isFiring.set(true);
    const stopFire = () => isFiring.set(false);
</script>

<style>
    .controls {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    .container {
        display: flex;
        justify-content: space-between;
        margin: 1rem;
    }
    .arrowGroup {
        display: flex;
        justify-content: space-between;
        width: 150px;
    }
</style>

<div class="controls">
    <div class="container">
        <div class="arrowGroup">
            <!-- Передаем наши обработчики и направление в атрибуты -->
            <IconButton
                    start={setDirectionLeft}
                    release={resetDirection}
                    active={$direction === 'left'}>
                <LeftArrow />
            </IconButton>
            <IconButton
                    start={setDirectionRight}
                    release={resetDirection}
                    active={$direction === 'right'}>
                <RightArrow />
            </IconButton>
        </div>
        <!-- Добавим обработчики для кнопки -->
        <IconButton start={startFire} release={stopFire} active={$isFiring}>
            <Bullet />
        </IconButton>
    </div>
</div>
