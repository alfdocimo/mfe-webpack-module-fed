<script>
  import { onMount } from "svelte";
  import Card from "./components/Card.svelte";

  let characters;
  let fetchCharacters;
  let loading;

  const updateCharacters = ({
    characters: _newCharacters,
    loading: isLoading,
  }) => {
    loading = isLoading;
    characters = _newCharacters;
  };

  onMount(async () => {
    await import("schwiftySearchModule/store").then(({ useCharacters }) => {
      ({ characters, loading, fetchCharacters } = useCharacters.getState());
      useCharacters.subscribe(updateCharacters);
    });
  });
</script>

<div>
  <p>Hello from svelte! 🧡</p>

  <button class="btn-fetch" on:click={() => fetchCharacters("Morty")}
    >click me to fetch some Morty's!</button
  >
  {#if loading || !characters}
    Loading...
  {:else}
    <p>
      These characters come from another module's store shared through WP5
      module federation
    </p>
    <ul class="character-result-panel">
      {#each characters as character}
        <Card title={character.name} bg={character.image} id={character.id} />
      {/each}
    </ul>
  {/if}
</div>

<style>
  .character-result-panel {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 16px;
  }

  p {
    padding: 6px;
  }

  .btn-fetch {
    background-color: #ff6663;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 10px;
  }
</style>
