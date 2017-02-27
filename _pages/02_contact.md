---
layout: page
title: Contact
permalink: /contact/
---


<form class="contact-form" action="https://getsimpleform.com/messages?form_api_token=a77e1d42f85a6b62878da7332bbd5d9e" method="post">
  <!--<input type='hidden' name='redirect_to' value='<the complete return url e.g. http://fooey.com/thank-you.html>' />-->
  <h2>Contact Us</h2>
  <ul>
    <li>
      <label for="name">Name</label>
      <input type="text" name="name" placeholder="Enter your name here" required>
    </li>
    <li>
      <label for="email">Email</label>
      <input type="email" name="email" placeholder="Enter your email here" required>
    </li>
    <li>
      <label for="message">Subject</label>
      <input id="subject" name="subject" placeholder="Enter your subject here" required>
    </li>
    <li>
      <label for="message">Message</label>
      <textarea rows="6" name="message" placeholder="Enter your message here" required></textarea>
    </li>
    <li>
      <button type="submit">Submit</button>
    </li>
  </ul>
</form>