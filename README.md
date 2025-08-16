# Client Side Web Form Validation

For the next minutes I will be talking about, what you can see here "Client Side Web Form Validation"

Before actual code let's check human code

Web: a service that run on top of the internet, like email but with other protocols, the web is a network of documents. This is our context.

Client: in this context, any software that let's us browse the web

Form: a way that allow us to send data from the document we are browsing to another document in the web or another place in the internet.

Validation: a method that allow us to discriminate if something is right or wrong

Side: I believe you are smart enough to get this, but I will give you and example -just in case- I am in the speaker side, you are in audience side.

So, we are going to check if something is right or wrong in the data we are trying to send before that data were actually sent.

Why we should do this "Client Side Web Form Validation" thing?

Real world scenario: it is cheaper, our server don't have to check invalid data and return silly responses like "Your name can't be a space character"

My case: practice programming logic.

So, now let's dive into code.

Not validation at all.

Most of client side validation are made using Javascript, but we can accomplish a lot with proper use of HTML and treat js validation as a progressive enhancement.

In example, just by adding the attribute `required` to the input the user's browser performs a check for emptyness, the downside of this method is that if you introduce the space ` ` character tecnically the input is not empty and the check pass.