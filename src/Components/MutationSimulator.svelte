MutationSimulator.svelte
<script lang="ts">
  import { geneSequence, insertBase, deleteBase } from '../stores/geneStore';
  let newBase = 'A';
  let index = 0;
</script>

<div class="space-y-4">
  <div class="flex space-x-2 items-center">
    <select bind:value={newBase} class="border p-2">
      <option value="A">A</option>
      <option value="T">T</option>
      <option value="G">G</option>
      <option value="C">C</option>
    </select>
    <input type="number" bind:value={index} class="border p-2 w-16" />
    <button class="bg-green-500 text-white px-4 py-2 rounded" on:click={() => insertBase(index, newBase)}>Insert</button>
    <button class="bg-red-500 text-white px-4 py-2 rounded" on:click={() => deleteBase(index)}>Delete</button>
  </div>
  <div>
    <p class="font-bold">Updated DNA:</p>
    <pre>{$geneSequence.join(' - ')}</pre>
  </div>
</div>
