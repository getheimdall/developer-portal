---
  tag: card
  path: /v1/api/cards/{id}
  verb: DELETE
  request:
    method: DELETE
    url: /v1/api/cards/1
    httpVersion: HTTP/1.1
    cookies: []
    headers:
      - name: "Content-Type"
        value: application/json
        comment: ''
    queryString: []
    postData: {}
    headerSize: 0
    bodySize: 0
    comment: ''
---

# Delete a card

**Description:** Delete a card

## Architecture

**Tag:** Card

**Path:** /v1/api/cards/{id}

**Resource Name:** br.com.conductor.heimdall.api.resource.CardResource

**Service Name:** br.com.conductor.heimdall.core.service.Cardervice

**Method Name**: deleteById

### Request example:
```bash
/v1/api/card/1
```

## Response

<p class="center-paragraph">
  <strong>Response code status:</strong> 200
</p>

### Example Response:
```json
{ }
```