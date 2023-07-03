
# 2023 - Social media post generator with post preview | using chatGPT.
[![My Skills](https://skills.thijs.gg/icons?i=nextjs,ts,tailwind,postman)](https://skills.thijs.gg)

# SocialGenius

empowers people to effortlessly generate engaging social media post ideas. With the integration of ChatGPT, an advanced language model, this generator provides a seamless experience in crafting compelling social media content.

Key Features:

* Post Preview: Get a glimpse of how your social media posts will look before publishing. Visualize your ideas in real-time and ensure they resonate with your audience.
* Smart Recommendations: Leverage the power of ChatGPT to receive intelligent suggestions for captivating headlines, catchy phrases, and attention-grabbing hashtags.
* Save your generated posts to a PDF file.


## .ENV variables
| Variable                 | Description                               |
|--------------------------|-------------------------------------------|
| NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY | Public key for the Clerk authentication service. |
| CLERK_SECRET_KEY         | Secret key for the Clerk authentication service. |
| DATABASE_URL             | URL for the database connection.            |
| BASE_URL                 | Base URL for the application.               |
| OPENAI_CREDS             | Credentials for the OpenAI service.         |



## Endpoints

### Endpoint: /api/posts/getExamples

#### request
Method: POST
Headers:

Authorization: (none for now)

Body:
```javascript
{
  "generateIdea": "Summer Vacation",
  "style": "casual"
}
```
#### Response
Status Code: 200 OK
Body:
```javascript
[
    {
        "message": {
            "role": "assistant",
            "content": "1. ❄️ Winter is here and we've got the coziest jumpers to keep you warm! 😍\n2. 🐑 Double tap if you need this sheepskin jumper in your life! 😍\n3. 🤩 Who says you can't be stylish AND warm this winter? Check out our sheepskin jumpers! \n4. 🔥 Our sheepskin jumpers will have you feeling cozy and looking 🔥! \n5. 🌧️ Keep the rain and cold at bay with our latest collection of sheepskin jumpers! ☔\n6. 🙌 We're excited to announce our new arrival of sheepskin jumpers! \n7. 🧥 Say goodbye to stiff and unforgiving winter jackets, and hello to the softest sheepskin jumpers! \n8. 💥 Can we just take a moment to appreciate how cute AND functional our sheepskin jumpers are?! 😍\n9. 🌡️ Don't let the winter chill bring you down! Shop our sheepskin jumpers to stay comfy all day long! \n10. 🐏 Our sheepskin jumpers are made from the finest materials, so you can tackle winter in style!"
        },
        "finish_reason": "stop",
        "index": 0
    },
```

