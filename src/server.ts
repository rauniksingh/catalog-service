import expressApp from './express-app';

export const StartServer = async () => {
  const PORT = process.env.PORT || 4000;
  const NODE_ENV = process.env.ENV || 'Development';

  expressApp.listen(PORT, () => {
    console.log(`📡 Server running at: http://localhost:${PORT}`);
    console.log(`📦 Environment: ${NODE_ENV}`);
  });

  process.on('uncaughtException', async(err) => {
    console.log(err)
    console.error('🚨 Uncaught Exception! Shutting down service...');
    process.exit(1)
  });
}

StartServer().then(() => {
  console.log(`🚀 Catalog Service started successfully`);
})

