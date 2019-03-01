import React from 'react'
import Router from 'next/router'
import Page from './../../components/page'
import SectionPage from './../../components/section/SectionPage'
import Row from './../../components/row'
import Col from '../../components/col'
import Card from './../../components/card'
import ButtonAccent from '../../components/button/ButtonAccent';

class Category extends React.Component {

    static getInitialProps = async ({ query }) => {
        return { category: query.category }
    }

    state = {
        category: undefined
    }

    componentDidMount() {
        const { category } = this.props
        this.loadCategories().then(categoriesFile => {
            const categoryFound = categoriesFile.categories[category]
            this.setState({ ...this.state, category: categoryFound })
        })
    }

    loadCategories = async () => {
        const res = await fetch('/static/content/categories/categories.json')
        return await res.json()
    }

    goTo = resourceName => {
        Router.push({
            pathname: '/docs/api',
            query: { api: resourceName }
        })
    }

    render() {

        const categoryName = this.props.category
        const { category } = this.state

        if (!category) {
            return (
                <Page>
                    <SectionPage className="section--last section--top-space" title={"Loading Category..."}></SectionPage>
                </Page>
            )    
        }

        const resources = category.resources 

        return (
            <Page>
                <SectionPage className="section--last section--top-space" title={categoryName} description={category.description}>
                    <Row className="categories">
                        { 
                            Object.keys(resources).map(resourceName => {
                                return (
                                    <Col g={4} m={4} key={resourceName}>
                                        <Card title={resources[resourceName].name}>
                                            <p>
                                                { resources[resourceName].description }
                                            </p>
                                            <ButtonAccent value="View Details" onClick={() => this.goTo(resourceName)} />
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </SectionPage>
            </Page>
        )
    }
}

export default Category