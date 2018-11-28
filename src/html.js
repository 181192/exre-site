import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
    try {
        stylesStr = require(`!raw-loader!../public/styles.css`)
    } catch (e) {
        console.log(e)
    }
}

module.exports = class HTML extends React.Component {
    render() {
        let css
        if (process.env.NODE_ENV === `production`) {
            css = (
                <style
                    id="gatsby-inlined-css"
                    dangerouslySetInnerHTML={{ __html: stylesStr }}
                />
            )
        }
        return (
            <html {...this.props.htmlAttributes}>
                <Helmet
                    title={`ExRe - Exam Resources 2018`}
                    meta={[
                        {
                            name: "description",
                            content: `This page is build with Gatsby 💜 (a React based static site generator) and is hosted on Github Pages.`
                        },
                        { property: "og:type", content: "website" },
                        {
                            property: "og:url",
                            content: `https://181192.github.io/exre-site/`
                        },
                        { property: "og:image", content: `${ogImage}` },
                        { property: "og:title", content: `ExRe | Exam Resources 2018` },
                        {
                            property: "og:description",
                            content: `This page is build with Gatsby 💜 (a React based static site generator) and is hosted on Github Pages.`
                        }
                    ]}
                    link={[
                        { rel: "shortcut icon", type: "image/png", href: `${favicon}` }
                    ]}
                />
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    {this.props.headComponents}
                    {css}
                </head>
                <body {...this.props.bodyAttributes}>
                    {this.props.preBodyComponents}
                    <div
                        key={`body`}
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    {this.props.postBodyComponents}
                </body>
            </html>
        )
    }
}
