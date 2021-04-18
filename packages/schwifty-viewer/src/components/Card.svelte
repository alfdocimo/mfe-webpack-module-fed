<script>
  export let title;
  export let bg;
</script>

<div class="card">
  <div class="card_image"><img src={bg} alt={`${title} image`} /></div>
  <div class="card_title title-container">
    <p>{title}</p>
  </div>
</div>

<style>
  .card {
    margin: 30px auto;
    width: 250px;
    height: 250px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.4s;
  }

  .card .card_image {
    width: inherit;
    height: inherit;
    border-radius: 10px;
  }

  .card .card_image img {
    width: inherit;
    height: inherit;
    border-radius: 10px;
    object-fit: cover;
  }

  .card .card_title {
    text-align: center;
    border-radius: 0px 0px 10px 10px;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 20px;
    position: relative;
    bottom: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    background-color: #0b3954;
  }

  .card:hover {
    transform: scale(1.05, 1.05);
    box-shadow: 0px 0px 15px 2px rgb(0 0 0 / 20%);
  }
</style>
