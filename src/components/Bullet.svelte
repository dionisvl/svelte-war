<script>
    // В переменную bullet принимаем объект, описывающий положение снаряда
    export let bullet;
</script>
<!-- Снаряд - это svg прямоугольник -->
<g
        transform={`translate(${bullet.x}, ${bullet.y}) rotate(${bullet.angle})`}>
    <rect width="3" height="5" fill="#212121" />
</g>
