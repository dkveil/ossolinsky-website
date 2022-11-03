const React = require("react")
const Layout = require("./src/templates/MainTemplate")

exports.wrapPageElement = ({ element, props }) => {
    return (
        <Layout.MainTemplate {...props}>
            {element}
        </Layout.MainTemplate>
    )
}