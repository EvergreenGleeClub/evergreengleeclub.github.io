---
layout: page-feature
feature_title:
  en: News
  ja: ニュース
description: Latest news from the Evergreen Glee Club.
permalink: /news/
images:
  feature: "pages/news_featured.jpg"
exclude: true
---
<div class="news">
  <ul class="list-entries">
  {% for post in site.posts %}
    <li class="list-entry">
      <div class="entry-header">
        <h3 class="title entry-title"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
        <time>{{ post.date | date: "%b %-d, %Y" }}</time>
      </div>
      <p class="content-excerpt">
        {{ post.excerpt }}
      </p>
      <a class="read-more" href="{{ post.url | prepend: site.baseurl }}">Read Full Article</a>
    </li>
  {% endfor %}
  </ul>

  <p>subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
</div>