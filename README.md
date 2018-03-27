# evergreengleeclub.github.io
Site for the Evergreen Glee Club


## Dev Dependencies

Install ruby through https://github.com/rbenv/rbenv

`gem install bundler`

`bundler`

## Dev
Live Server:

`bundle exec jekyll serve -L`

Visit `http://127.0.0.1:4000/`

Jekyll Documentation located at https://jekyllrb.com/

## Build Dependencies
`npm install -g firebase-tools`

(or `yarn global add firebase-tools` if you use `yarn` instead of `npm`)

Log into firebase:

`firebase login`

## Build and Deploy
`bundle exec jekyll build --destination public`
`firebase deploy`