module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  mode: 'jit',
  content: [],
  theme: {
    extend: {
      colors: {
        'dodger-blue': '#3e82fc',
        'azure': '#1da1f2',
        'iceberg': '#daf4f0',
        'vista-white': '#fbf8f3',
        'butterscotch': '#fdb147'
      },
    },
  },
  plugins: [],
}
