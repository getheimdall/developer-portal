const AppSecurity = ({ clientId, listAccessToken }) => (
    <div>
        <br/>
        { clientId &&  <h5><strong>Client ID: </strong>{clientId} </h5> }
        { listAccessToken && listAccessToken.length > 0 && 
            <h5><strong>Access Tokens: </strong> { listAccessToken && listAccessToken.map((accessToken, index) => {
                return <span key={index}>{accessToken.code}{index < listAccessToken.length - 1 ? `, ` : ``}</span>
            })}</h5>
        }
    </div>
)

export default AppSecurity