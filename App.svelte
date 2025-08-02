<script lang="ts">
  let name = 'Innovator';
</script>

<main class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-300 via-yellow-100 to-white font-glittery text-gray-800 px-4">
  <h1 class="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
    Welcome, {name} 🌟
  </h1>
  <p class="text-lg md:text-xl text-center max-w-2xl leading-relaxed">
    This is your <span class="font-semibold text-green-600">glittering</span> playground built with
    <span class="text-yellow-500 font-semibold">Svelte</span>, 
    <span class="text-blue-600 font-semibold">TypeScript</span>, and 
    <span class="text-purple-500 font-semibold">Tailwind CSS</span>.
  </p>
</main>

<style>
  main {
    animation: fadeIn 1.2s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

