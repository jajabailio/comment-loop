# CommentLoop

## **Setup**

> Notes: You can use local Mongodb server to connect to the database.

1.  Install packages

    ```bash
    npm install --save
    ```

2.  Start application

    ```bash
    npm start
    ```

    <br>

## **Testing Routes**

You can test the following endpoints in Postman (or other alternatives)

<br>

### **CREATE** Survey - **POST** - _"/api/surveys"_

- Open the "sample-body.js" file to get a sample JSON object to create a new Survey.
  > Upon Creation, a "mainId" is added in the object, which will hold the \_id of the first instance of this template. You will also find a "version_number".
  > <br>

### **UPDATE** Survey - **PUT** - _"/api/surveys/:id"_

- The "id" parameter is the "mainId" field in the Survey schema.
- You can use the same json data used in the POST survey route. _Just change the value of the "name" field, or a question's/option's "text" field to another value._

  > When updating a template, it will create a new instance of the Survey, but will hold the "mainId" with the "\_id" of the first instance created in the collection.
  > You will notice in the DB that the "version_number" has increased and the "isActive" from the previous instance is now **false** as opposed to the updated instance will have the "isActive" set to **true**.
  > <br>

### **FETCH** Survey - **GET** - _"/api/surveys/:id"_

- The "id" parameter is the "mainId" in the Survey schema. The api will fetch the instance with the "isActive" set to **true**.
- You can also fetch a list of surveys by omitting the "id" parameter.

<br>

### **FETCH** Response by Survey - **GET** - _"/api/survey/responses/:id"_

- This endpoint will fetch the survey details, as well as the options answered from different responses.
  <br>
  <br>

### **CREATE** Response - **POST** - _"/api/responses"_

- Open the "sample-body.js" file to get a sample JSON object to create a new Response.

### **FETCH** Response - **GET** - _"/api/responses/:id"_

- The "id" params is the "\_id" for the Response schema.

  > In the "sample-body.js" file, you can follow the guide to have a data ready to test
