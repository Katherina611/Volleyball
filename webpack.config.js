module.exports	=	{
    entry:	['whatwg-fetch',"./js/app.jsx"],
    output:	{
        filename:	"./js/out.js"
    },
    devServer:	{
        inline:	true,
        contentBase: './',
        port: 3001
    },
    watch:true,
    devtool: 'source-map',
    module:	{
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader:	'babel-loader',
            query:	{
                presets:	['es2015', 'stage-2', 'react']
            }
        },
            {
                test:	/\.scss$/,
                loader:	['style-loader', 'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: "url-loader",
                }
            }

        ]
    }
};
