---
 tag: Environments
 path: /v1/api/enviroments
 verb: GET
---

# Find all environments

**Description:** Find all environemnts

## Architecture

**Tag name:** Environments

**Path:** GET /v1/api/environments

**Resource Name:** br.com.conductor.heimdall.api.resource.EnvironmentResource

**Service Name:** br.com.conductor.heimdall.core.service.EnvironmentService

**Method Name**: list

## Request

**Request Name:** br.com.conductor.heimdall.core.dto.EnvironmentDTO

|Param | Description | Param Type | Data type | Example |
|---|---|---|---|---|
| name | Name of the environment | Query | string | Host default |
| description | Description of the environment | Query | string | Host default description |
| inboundURL | IP to receive the request | Query | string | http://127.0.0.1:8080 |
| outboundURL | IP to send the response | Query | string | http://127.0.0.1:8080 |
| status | Validate as active or inactive | Query | string | ACTIVE |
| offset | Count pagination | Query | integer | 0 |
| limit | Limit of result by page | Query | integer | 10 |

### Request example:
```
/v1/api/environments?name=Host&status=ACTIVE&offeset=0&limit=10
```

## Response

**Response name:** br.com.conductor.heimdall.core.dto.page.EnvironmentPage

| Param | Description | Data type | Example |
|---|---|---|---|
| id | Identifier object | Long | 1 |
| name | Name of the environment | string | Host default |
| description | Description of the environment | string | Host default description |
| inboundURL | IP to receive the request | string | http://127.0.0.1:8080 |
| outboundURL | IP to send the response | string | http://127.0.0.1:8080 |
| creationDate | Date of environment was created | date | 2019-01-31T14:42:08.505 |
| status | Validate as active or inactive | string | ACTIVE |
| variables | Object with key and value | object | {}

**Response code status:** 200

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
      "name": "Host default",
      "description": "Host default description",
      "inboundURL": "http://127.0.0.1:8080",
      "outboundURL": "http://127.0.0.1:8080",
      "creationDate": "2019-01-31T14:42:08.505",
      "status": "ACTIVE",
      "variables": {}
    }
  ]
}
```