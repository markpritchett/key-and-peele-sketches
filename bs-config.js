module.exports = {
    port: 3000,
    files: ['./dist/**'],
    server: {
        baseDir: "./dist",
        serveStaticOptions: {
            extensions: ['html']
        }
    }
};