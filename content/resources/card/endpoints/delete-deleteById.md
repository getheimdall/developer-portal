---
  tag: card
  path: /v1/api/cards/{id}
  verb: DELETE
  request:
    headers:
      contentType: application/json
    params: ''
    body: ''
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
```
/v1/api/card/1
```

## Response

**Response code status:** 200

### Example Response:

```json
{ }
```