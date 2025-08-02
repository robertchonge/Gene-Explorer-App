<script>
  import DNAViewer from '../components/DNAViewer.svelte';
  import { geneSequence } from '../stores/geneStore';
</script>

<main class="p-6">
  <h1 class="text-3xl font-bold underline mb-4">Welcome to Gene Explorer</h1>
  <p class="mb-4">Explore the wonders of genetics interactively.</p>
  <DNAViewer sequence={$geneSequence} />
</main>
