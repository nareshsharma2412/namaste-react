
# What is reactJS?

ReactJS (also known as React) is an open-source JavaScript library that is used for building user interfaces for web and mobile applications. It was developed by Facebook and is now maintained by a community of developers.

React allows developers to create reusable UI components that can be used in various parts of an application, making it easier to manage the application's complexity. React also uses a virtual DOM (Document Object Model), which allows it to update the UI efficiently by only updating the parts of the DOM that have changed, instead of re-rendering the entire page.

React is often used in combination with other libraries and frameworks, such as Redux for state management and React Native for building mobile applications. It is widely used in the development of single-page applications, as well as large-scale web applications for companies such as Facebook, Instagram, and Airbnb.
# What is CDN?

CDN stands for Content Delivery Network. It is a distributed network of servers located in various geographical locations around the world, designed to deliver web content and assets more quickly and efficiently to users.

When a user requests content from a website, the request is routed to the nearest CDN server instead of the origin server, which can be located far away from the user. The CDN server then delivers the content to the user from its local cache, reducing the time it takes for the user to receive the content and improving their overall browsing experience.

CDNs are used to improve website performance, reduce server load, and ensure high availability and scalability. They are particularly useful for websites that have a large global audience or deliver a lot of media content, such as images, videos, and large files. Popular CDN providers include Akamai, Cloudflare, and Amazon CloudFront.

# What are CDN links for React and from where we can get those?

Both React and ReactDOM are available over given CDN links.
For more information visit the link: https://legacy.reactjs.org/docs/cdn-links.html

```bash
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
``` 


# Why crossorigin attribue is being used in above given script tag?

In the example you provided, the crossorigin attribute is being used to specify that the React library being loaded from the unpkg CDN should be loaded with CORS enabled.

When a script is loaded from a different domain or protocol than the one hosting the page, modern browsers enforce a same-origin policy that restricts the script's access to resources on the page. However, if the script being loaded has the crossorigin attribute set to a value of "anonymous" or "use-credentials", the browser will allow the script to access cross-origin resources using CORS.

In this case, the crossorigin attribute is set to "anonymous", which means that the React script being loaded is requesting access to cross-origin resources, but will not send any user credentials (such as cookies or authorization headers) along with its requests. This is a common configuration for loading third-party scripts from CDNs to ensure that they don't have access to any sensitive user data.


# Why production and development CDN are different?

CDNs often provide different versions of libraries or assets for development and production environments to better suit the needs of each environment.

In the example we provided above, the CDN link is loading the development version of the React library with the react.development.js file. This version of the library includes additional error checking and debugging features that are useful during development but may add unnecessary overhead to a production application.

On the other hand, the production version of the library, which is often denoted by a filename that ends with .min.js, is optimized for performance and typically has a smaller file size than the development version. It usually includes code minification, tree shaking, and other optimizations that make it more suitable for use in a production environment.

Using the production version of a library on a live website can improve page load times and reduce bandwidth usage, which can lead to a better user experience. However, it's important to ensure that the production version has been thoroughly tested and that it is compatible with the rest of the application's code before deploying it to a live environment.