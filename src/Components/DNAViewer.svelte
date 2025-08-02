<script lang="ts">
  export let sequence: string[] = [];
</script>

<div class="flex overflow-x-auto space-x-2 p-4 bg-gray-100 rounded">
  {#each sequence as base}
    <div class="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold
                {base === 'A' ? 'bg-green-500' : ''}
                {base === 'T' ? 'bg-red-500' : ''}
                {base === 'G' ? 'bg-blue-500' : ''}
                {base === 'C' ? 'bg-yellow-500' : ''}">
      {base}
    </div>
  {/each}
</div>
