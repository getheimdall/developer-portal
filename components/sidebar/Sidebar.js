import Col from '../col'
import Row from '../row'

const Sidebar = () => (
    <Row className="privacy">
        <Col id="top" g={9} t={12}>
            <div className="privacy__content">
                <div id="chapter1" className="privacy__chapter chapter">
                    <h3 className="privacy__chapter-title">Sigma Technologies, Inc.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate
                    enim. Etiam enim tellus, maximus vel augue sed, pharetra hendrerit orci. Vivamus sed massa in nibh
                    imperdiet mattis quis sed augue. Pellentesque erat metus, vestibulum nec nisl pharetra, laoreet euismod
                    mauris. Aenean quis nulla lacus. Cras tristique, est non posuere venenatis, lectus diam ultrices turpis,
                    non blandit lacus purus id ante. Morbi vitae sollicitudin neque. Praesent finibus velit ac augue consequat
                    sollicitudin. Nunc vitae nunc in ex vehicula finibus rutrum id nisi. Aliquam vel egestas tellus.
                    Vestibulum quis purus sagittis, fermentum leo vitae, bibendum mauris. Nulla facilisi. Phasellus eu
                    aliquam leo.</p>
                </div>
                <div id="chapter2" className="privacy__chapter chapter">
                    <h3 className="privacy__chapter-title">Intellectual Property</h3>
                    <p>Vivamus feugiat augue eu ante ullamcorper facilisis. In consequat urna at sapien auctor, ac fermentum
                    velit pretium. Quisque eu turpis tempus, posuere massa at, vestibulum neque. Duis ac diam dictum,
                    porttitor diam eu, fermentum nulla. Nunc eu elit faucibus, efficitur risus in, efficitur ante. Proin
                    id ex orci. Aenean semper, orci sit amet maximus commodo, neque erat iaculis ex, eget posuere nisl nisi
                    at orci. Donec ac molestie nunc, sit amet aliquet nisi. Morbi a efficitur nisi. Quisque rhoncus nisl id
                    magna sodales, vitae tristique quam consequat. Integer vel ex sed sapien sodales gravida. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vulputate quam
                    in risus fermentum, vel hendrerit ligula ullamcorper. Suspendisse feugiat nulla id nisl tincidunt
                    condimentum. Nullam viverra dui ligula, vitae vehicula nunc rhoncus eget.</p>
                    <p>Donec mattis ante et dapibus sodales. Suspendisse eros ipsum, pretium a dui sit amet, tristique semper
                    dolor. Vestibulum dignissim consequat dolor nec semper. Pellentesque iaculis gravida metus vel semper.
                    Etiam at placerat nunc. Proin id eros nec augue dignissim volutpat vitae a risus. Duis lorem neque,
                    sodales in turpis ac, finibus congue leo.</p>
                </div>
                <div id="chapter3" className="privacy__chapter chapter">
                    <h3 className="privacy__chapter-title">Site Security</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate
                    enim. Etiam enim tellus, maximus vel augue sed, pharetra hendrerit orci. Vivamus sed massa in nibh
                    imperdiet mattis quis sed augue. Pellentesque erat metus, vestibulum nec nisl pharetra, laoreet euismod
                    mauris. Aenean quis nulla lacus. Cras tristique, est non posuere venenatis, lectus diam ultrices turpis,
                    non blandit lacus purus id ante. Morbi vitae sollicitudin neque. Praesent finibus velit ac augue consequat
                    sollicitudin. Nunc vitae nunc in ex vehicula finibus rutrum id nisi. Aliquam vel egestas tellus.
                    Vestibulum
                    quis purus sagittis, fermentum leo vitae, bibendum mauris. Nulla facilisi. Phasellus eu aliquam leo.
                    </p>
                    <h4 className="privacy__chapter-subtitle">Links to Other Websites and Services</h4>
                    <p>Vivamus feugiat augue eu ante ullamcorper facilisis. In consequat urna at sapien auctor, ac fermentum
                    velit pretium. Quisque eu turpis tempus, posuere massa at, vestibulum neque. Duis ac diam dictum,
                    porttitor diam eu, fermentum nulla.
                    </p>
                    <h4 className="privacy__chapter-subtitle">How We Use Your Information</h4>
                    <p>Vivamus feugiat augue eu ante ullamcorper facilisis. In consequat urna at sapien auctor, ac fermentum
                    velit pretium. Quisque eu turpis tempus, posuere massa at, vestibulum neque. Duis ac diam dictum,
                    porttitor diam eu, fermentum nulla.
                    </p>
                    <p className="privacy__chapter-description--bold">Sigma may use your information, including Personal
                    Information in order to perform our Services including for the following activities:</p>
                    <p className="privacy__chapter-description--bold privacy__chapter-list-title">Identity Verification and
                    Security</p>
                    <ul className="privacy__chapter-list">
                    <li>Confirm that you are over the age of 18..</li>
                    <li>Verify your identity and safeguard against potential fraud.</li>
                    <li>Protect data from unauthorized parties and comply with legal requirements.</li>
                    </ul>
                    <p className="privacy__chapter-description--bold privacy__chapter-list-title">Underwriting and Funding Loan</p>
                    <ul className="privacy__chapter-list">
                    <li>Confirm that you are over the age of 18..</li>
                    <li>Verify your identity and safeguard against potential fraud.</li>
                    <li>Protect data from unauthorized parties and comply with legal requirements.</li>
                    </ul>
                    <p>Vivamus feugiat augue eu ante ullamcorper facilisis. In consequat urna at sapien auctor, ac fermentum
                    velit pretium. Quisque eu turpis tempus, posuere massa at, vestibulum neque. Duis ac diam dictum,
                    porttitor diam eu, fermentum nulla.</p>
                </div>
            </div>
        </Col>
        <Col g={3} className="d-t-none">
            <nav className="sidebar">
                <ul className="sidebar__list">
                    <li className="sidebar__item active"><a href="#chapter1">Sigma Technologies, Inc.</a></li>
                    <li className="sidebar__item"><a href="#chapter2">Intellectual Property</a></li>
                    <li className="sidebar__item"><a href="#chapter3">Site Security</a></li>
                </ul>
            </nav>
        </Col>
    </Row>
)

export default Sidebar