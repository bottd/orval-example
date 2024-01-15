import { defineConfig } from 'orval';

export default defineConfig({
  petstore: {
    output: {
      mode: 'split',
      client: 'react-query',
      target: './src/petStore/'
    },
    input: {
      target: './pets.yaml'
    }
  }})
