<script>
// В переменную enemy будем принимать объект, описывающий врага
export let enemy;
</script>

// Отобразим прямоугольник с врагом, выполнив трансформацию по текущим координатам.
<g transform={`translate(${enemy.x}, ${enemy.y})`} >
<rect width="30" height="30" fill="#212121" />
    </g>
