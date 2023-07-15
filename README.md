<p align="center">
  <img src="https://github.com/codedevbrad/chatGPT__Post_generator/assets/46296577/75f54e61-6df1-4411-b9e4-4019928a0f8c" alt="Sublime's custom image" />
</p>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skills.thijs.gg/icons?i=nextjs,ts,tailwind,postman" />
  </a>
</p>

<div align="center">
  Empowers people to effortlessly generate engaging social media post ideas. With the integration of ChatGPT, an advanced language model, this generator provides a seamless experience in crafting compelling social media content.
</div>

<br />
<br />

<div>
  Key Features:
  
  * Post Preview: Get a glimpse of how your social media posts will look before publishing. Visualize your ideas in real-time and ensure they resonate with your audience.
  * Smart Recommendations: Leverage the power of ChatGPT to receive intelligent suggestions for captivating headlines, catchy phrases, and attention-grabbing hashtags.
  * Save your generated posts to a PDF file.
</div>

---


## .ENV variables
| Variable                 | Description                               |
|--------------------------|-------------------------------------------|
| NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY | Public key for the Clerk authentication service. |
| CLERK_SECRET_KEY         | Secret key for the Clerk authentication service. |
| DATABASE_URL             | URL for the database connection.            |
| BASE_URL                 | Base URL for the application.               |
| OPENAI_CREDS             | Credentials for the OpenAI service.         |


---

## Setup

### Clerk auth.
Clerk.com is an authentication and user management service that simplifies the process of adding user authentication and management to your web applications.
steps involved.
1. head to https://dashboard.clerk.com/
2. add a new application and fill in name and login providers.
3. Select NextJs from the quickstart and Copy the API keys to .env file.

### Open a.i
ChatGPT which is the sibling model to InstructGPT, is a form of generative AI -- a tool that lets users enter prompts to receive humanlike images and text. We use this tool to generate the social media post ideas.
steps involved to setup.
1. head to https://openai.com/ and signup.
2. navigate to https://platform.openai.com/account/api-keys and generate a new secret key.
3. paste the key into the .env with the appropriate key name.


## Endpoints
 

### Endpoint: /api/generate/postIdeas

#### request
Method: POST
Headers:

Authorization: (none for now)

Body:
```javascript
{
  "query": "Summer Vacation",
   "mood": "casual"
}
```
#### Response
Status Code: 200 OK
Body:
```javascript
  [

  ]
```
