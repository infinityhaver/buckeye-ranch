module.exports = {
	siteMetadata: {
		title: `Buckeye Ranch`,
		siteUrl: `https://buckeyeranchmain.gatsbyjs.io/`,
//		siteUrl: `https://buckeye-ranch.digitalocean.app/`,
	},
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-image`,
		`gatsby-background-image`,
		`gatsby-plugin-fontawesome-css`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/content/assets`,
			},
		},
	],
}