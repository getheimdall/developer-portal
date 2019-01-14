import Section from './Section'
import Row from '../row'
import Col from '../col'
import Container from '../container';

const SectionPage = ({ children, title, description, className }) => (
    <Section className={className}>
        <Container>
            <Row>
                <Col>
                    <h3 className="section__title">{title}</h3>
                    {description && <p className="section__description">{description}</p>}
                </Col>
            </Row>
            <br/>
            {children}
        </Container>
    </Section>
)

SectionPage.defaultProps = {
    className: ''
}

export default SectionPage