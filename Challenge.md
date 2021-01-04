
## Coding challenge (1 hour)

You have been given the task to create a new microservice with a REST API, using nodejs and a database of your choice that is suitable.
The new microservice handles the submission of home loan applications, as well as updating and deleting (canceling) the submissions.
Please note that it is ​not important​ to finish this challenge. This challenge is meant to show how you approach the problem and how you work. We will take some time toward the end of the hour to talk through your solution and talk about possible next steps that you might have taken.
The microservice needs to fulfill the following requirements:

- Ability to submit a new home loan application based home loan data dictionary and persist the data in-memory for later retrieval
- Returning useful validation errors based on the required data fields (See data
dictionary below)
- Implement each of the endpoints in the below table in order

| HTTP Method | Path  | Description  |
| ------- | --- | --- |
| POST | /applications/ | Creates a new application, returning the application and its new identifier. |
| PUT | /applications/:id | Updates an existing application using the application identifier.
 |
| GET | /applications/:id | Retrieves an existing home loan application using the application identifier
 |
| DELETE | /application/:id | 
Soft deletes an existing application using the application identifier |
| GET | /applications/ | Returns all applications that have not been deleted. |


### Home loan application data dictionary
                             
| Property | Type  | Description  |
| ------- | --- | --- |
| applicant_first_name | string | The first name of the home loan applicant. | 
| applicant_last_name | string | The last name of the home loan applicant. |       
| loan_amount | number | 
The value of the home loan, represented as whole dollars (AUD). |       
| lender_id | string | The identifier for the lender. Supported values: CMB - STG - NCP - NAB |       
| id | string | An alpha numeric identifier for the home loan application submission. |
| assets | array | List of assets owned by the applicant. (see asset data dictionary below)
 |
| liabilities | array | List of liabilities the applicant is responsible for. (see liability data dictionary below) |                                
                                 
### Asset data dictionary

| Property | Type  | Description  |
| ------- | --- | --- |
| name | string | The name of the asset e.g House |
| value | number | The whole dollar value of the asset (AUD) |

### Liability data dictionary

| Property | Type  | Description  |
| ------- | --- | --- |
| name | string | The name of the liability e.g Credit Card |
| value | number | The whole dollar value of the liability (AUD) |


### Starter Codebase

The starter codebase has the challenge in a incomplete state. 

Use the interactive swagger api explorer to test the endpoint.

Update the tests as we progress through the assignment.

