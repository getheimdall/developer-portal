import React from 'react'
import ReactMarkdown from 'react-markdown'
import Router from 'next/router'
import Page from './../components/page'
import SectionPage from './../components/section/SectionPage'
import Row from '../components/row'
import Col from '../components/col'
import Card from '../components/card'
import ButtonAccent from './../components/button/ButtonAccent'

class ApiBrowser extends React.Component {

    state = {
        category: undefined
    }

    componentDidMount() {
        this.loadCategories().then(categoriesFile => {
            this.setState({ ...this.state, category: categoriesFile })
        })
    }

    loadCategories = async () => {
        const res = await fetch('/static/content/categories/categories.json')
        return await res.json()
    }

    getCategoriesName = () => {
        const { category } = this.state
        const categories = category.categories

        return Object.keys(categories)
    }

    goTo = categoryName => {
        Router.push({
            pathname: '/docs/category',
            query: { category: categoryName }
        })
    }

    render() {

        const { category } = this.state
        
        if (!category) {
            return (
                <Page>
                    <SectionPage className="section--last section--top-space" title="Loading categories..."/>
                </Page>
            )
        }

        const categories = category.categories

        return ( 
            <Page>
                <SectionPage className="section--last section--top-space">
                    <Row className="categories">
                        <Col>
                            <ReactMarkdown source={category.bodyContent} />
                        </Col>
                        <Col>
                            <br/>
                            <Row>
                                {
                                    this.getCategoriesName().map(categoryName => {
                                        return (
                                            <Col g={3} m={3} key={categoryName}>
                                                <Card title={categoryName}>
                                                    <p>{categories[categoryName].description}</p>
                                                    <ButtonAccent value="See documentation" onClick={() => this.goTo(categoryName)}/>
                                                </Card>
                                            </Col>   
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </SectionPage>
            </Page>
        )
    }
}

export default ApiBrowser