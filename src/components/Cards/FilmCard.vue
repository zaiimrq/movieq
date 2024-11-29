<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <p class="title">Venom 2024</p>
        <p>Hover Me</p>
      </div>
      <div class="flip-card-back">
        <p class="title">Test</p>
        <p>Leave Me</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 100%;
  /* height: 100%; */
  /* width: 190px; */
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid red;
  border-radius: 1rem;
}

.flip-card-front {
  background: linear-gradient(
    120deg,
    #0f0f0f 60%,
    #171717 88%,
    #1c1c1c 40%,
    rgba(0, 0, 0, 0.8) 48%
  );

  color: white;
}

.flip-card-back {
  background: linear-gradient(
    120deg,
    rgb(185, 28, 28) 30%,
    coral 88%,
    bisque 40%,
    rgb(185, 28, 28) 78%
  );

  color: white;
  transform: rotateY(180deg);
}
</style>
