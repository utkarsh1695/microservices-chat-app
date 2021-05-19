require("@babel/register")({
  plugins: [
    [
      "css-modules-transform",
      {
        extensions: [".css", ".scss"],
        generateScopedName: '[folder]__[local]'
      }
    ]
  ],
  extensions: ['.tsx', '.ts', '.jsx', '.js']
});

require("./server/index");