<script>
  import { onMount } from "svelte";
  let todos;
  let fetchTodos;

  const updateTodos = (newTodos) => {
    todos = newTodos.todos;
  };

  onMount(async () => {
    await import("schwiftySearchModule/store").then(({ useTodos }) => {
      ({ todos, fetchTodos } = useTodos.getState());
      useTodos.subscribe(updateTodos);
    });
  });
</script>

<div class="mui-panel">
  Hello from svelte!

  <button on:click={() => fetchTodos()}>click me to fetch todos from the view module</button>
  {#if todos}
    <h1>These todos come from another module's store</h1>
    <ul>
      {#each todos as todo}
        <li>{todo.title}</li>
      {/each}
    </ul>
  {/if}
</div>
