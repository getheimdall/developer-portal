---
  tag: card
  path: /v1/api/cards
  verb: GET
  request:
    method: GET
    url: /v1/api/cards
    httpVersion: HTTP/1.1
    cookies: []
    headers:
      - name: "Content-Type"
        value: application/json
        comment: ''
    queryString:
      - name: name
        value: Card
        comment: ''
      - name: status
        value: ACTIVE
        comment: ''
      - name: offset
        value: '0'
        comment: ''
      - name: limit
        value: '10'
        comment: ''
    postData: {}
    headerSize: 0
    bodySize: 0
    comment: ''
---

# Find all cards

**Description:** Find all cards

## Architecture

**Tag:** Card

**Path:** /v1/api/cards

**Resource Name:** br.com.conductor.heimdall.api.resource.CardResource

**Service Name:** br.com.conductor.heimdall.core.service.Cardervice

**Method Name**: list

## Request

<p class="center-paragraph">
  <strong>Request Name:</strong> br.com.conductor.heimdall.core.dto.CardDTO
</p>

|Param | Description | Param Type | Data type | Example |
|---|---|---|---|---|
| name | Name of the card | Query | string | Host default |
| description | Description of the card | Query | string | Host default description |
| status | Validate as active or inactive | Query | string | ACTIVE |
| offset | Count pagination | Query | integer | 0 |
| limit | Limit of result by page | Query | integer | 10 |

### Request example:
```bash
/v1/api/Card?name=Host&status=ACTIVE&offset=0&limit=10
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

<p class="center-paragraph">
  <strong>Response code status:</strong> 200
</p>

### Example Response:

```json
{
  "number": 0,
  "size": 10,
  "totalPages": 1,
  "numberOfElements": 1,
  "totalElements": 1,
  "firstPage": false,
  "hasPreviousPage": false,
  "hasNextPage": false,
  "hasContent": true,
  "first": true,
  "last": true,
  "nextPage": 0,
  "previousPage": 0,
  "content": [
    {
      "id": 1,
      "name": "Card test",
      "description": "Card test description",
      "creationDate": "2019-01-31T14:42:08.505",
      "status": "ACTIVE"
    }
  ]
}
```