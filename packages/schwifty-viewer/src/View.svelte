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

<style>
  .character-result-panel {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>

<div>
  Hello from svelte! 🧡

  <button on:click={() => fetchCharacters('Morty')}>click me to fetch some
    Morty's!</button>
  {#if loading || !characters}
    Loading...
  {:else}
    <p>
      These characters come from another module's store shared through WP5
      module federation
    </p>
    <ul class="character-result-panel">
      {#each characters as character}
        <Card title={character.name} bg={character.image} />
      {/each}
    </ul>
  {/if}
</div>
