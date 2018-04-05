---
layout: page-feature
title: Repertoire
description: The Evergreen Glee Club's reportoire. We sing a varied repertoire of nostalgic, traditional and contemporary Japanese songs...
permalink: /repertoire/
feature_title:
  en: Repertoire
  ja: レパートリー
images:
  feature: "pages/repertoire-featured.jpg"
order: 2
---

<p class="row center-xs">
  Welcome to EGC's repertoire. <br>
  We sing a varied repertoire of nostalgic, traditional and contemporary Japanese songs. <br>
  Many of songs we sing are included in this page, though not exhaustive.

</p>
<div class="repertoire container-fluid">
  <dl class="repertoire-list row">
    {% for song in site.data.repertoire %}
      <div class="repertoire-list_song col-sm-6 col-xs-12">
        <dt>
          {{song.title}}
        </dt>
        <dd>
          {{song.description}}
        </dd>
        {% if song.subtitles %}
          <dd class="subtitle">
	      {% for subtitle in song.subtitles %}
                {{subtitle}}<br/>
              {% endfor %}
          </dd>
	{% endif %}
      </div>
    {% endfor %}
  </dl>
</div>
