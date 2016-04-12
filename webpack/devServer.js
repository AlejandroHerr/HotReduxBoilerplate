import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './';

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';
const URI = `http://${HOST}:${PORT}`;

config.entry.main.unshift(`webpack-dev-server/client?${URI}`, 'webpack/hot/dev-server');
config.plugins.push(new webpack.HotModuleReplacementPlugin());

const compiler = webpack(config);
const devServer = {
  hot: true,
  publicPath: `${URI}${config.output.publicPath}`,
  stats: {
    colors: true,
  },
};

const server = new WebpackDevServer(compiler, devServer);
server.listen(PORT);
