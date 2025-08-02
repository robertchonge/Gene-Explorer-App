import { writable } from 'svelte/store';

export const geneSequence = writable<string[]>(['A', 'T', 'G', 'C', 'A', 'T']);

export const insertBase = (index: number, base: string) => {
  geneSequence.update(seq => {
    seq.splice(index, 0, base);
    return [...seq];
  });
};

export const deleteBase = (index: number) => {
  geneSequence.update(seq => {
    seq.splice(index, 1);
    return [...seq];
  });
};

