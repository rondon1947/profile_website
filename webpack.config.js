import {resolve as _resolve} from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = './src/index.tsx';
export const output = {
    path: _resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
};
export const resolve = {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
};
export const module = {
    rules: [
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: 'ts-loader',
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
    ],
};
export const devServer = {
    historyApiFallback: true, // Allows for client-side routing with react-router-dom
};
export const plugins = [
    new HtmlWebpackPlugin({
        template: './public/index.html',
    }),
];
