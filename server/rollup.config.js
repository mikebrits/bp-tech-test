module.exports = {
    input: './src/app.js',
    output: {
        file: 'dist/server.js',
        format: 'esm'
    },
    watch : {
        include: 'src/**'
    }
};