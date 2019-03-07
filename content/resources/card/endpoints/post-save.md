---
  tag: card
  path: /v1/api/cards
  verb: POST
  request:
    method: POST
    url: /v1/api/cards
    httpVersion: HTTP/1.1
    cookies: []
    headers:
      - name: "Content-Type"
        value: application/json
        comment: ''
    queryString: []
    postData: 
      mimeType: application/json
      params: []
      text: '{"name": "Card test", "description": "Card description test", "status": "ACTIVE"}'
      comment: ''
    headerSize: 0
    bodySize: 0
    comment: ''
---

# Save a card

**Description:** Save a card

## Architecture

**Tag:** Card

**Path:** /v1/api/cards

**Resource Name:** br.com.conductor.heimdall.api.resource.CardResource

**Service Name:** br.com.conductor.heimdall.core.service.Cardervice

**Method Name**: save

## Request

<p class="center-paragraph">
  <strong>Request Name:</strong> br.com.conductor.heimdall.core.dto.CardDTO
</p>

|Param | Description | Param Type | Data type | Example |
|---|---|---|---|---|
| name | Name of the card | Query | string | Host default |
| description | Description of the card | Query | string | Host default description |
| status | Validate as active or inactive | Query | string | ACTIVE |

### Request example:
```
/v1/api/card
```

## Response

<p class="center-paragraph">
  <strong>Response name:</strong> br.com.conductor.heimdall.core.dto.page.CardPage
</p>

| Param | Description | Data type | Example |
|---|---|---|---|
| id | Identifier object | Long | 1 |
| name | Name of the card | string | Card test |
| description | Description of the card | string | Card test description |
| creationDate | Date of card was created | date | 2019-01-31T14:42:08.505 |
| status | Validate as active or inactive | string | ACTIVE |

**Response code status:** 200

### Example Response:

```json
{
  "id": 1,
  "name": "Card test",
  "description": "Card test description",
  "creationDate": "2019-01-31T14:42:08.505",
  "status": "ACTIVE"
}
```