<script lang="ts">
  import { geneSequence } from '../stores/geneStore';

  $: rna = $geneSequence.map(base => base === 'T' ? 'U' : base);
  $: codons = [];
  for (let i = 0; i < rna.length; i += 3) {
    codons.push(rna.slice(i, i + 3).join(''));
  }
</script>

<div>
  <h2 class="text-xl font-semibold mb-2">RNA Sequence</h2>
  <p>{rna.join('')}</p>

  <h2 class="text-xl font-semibold mt-4 mb-2">Codons</h2>
  <div class="flex gap-2 flex-wrap">
    {#each codons as codon}
      <div class="px-3 py-2 bg-purple-500 text-white rounded-full">{codon}</div>
    {/each}
  </div>
</div>
