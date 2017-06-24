dawson-examples
===============
examples and reference implementations using dawson

## Usage

To run each example, after [configuring AWS Credentials](https://dawson.sh/docs.html#0-working-with-aws), run:

```bash
$ npm install
$ dawson deploy
$ dawson dev # starts the development server
```

The first deploy will take ~20 minutes, because the [Amazon CloudFront Distribution](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html) needs to be created.  
Subsequent deploys will take ~2 minutes.

## Index

| Example name  | AWS Lambda Runtime | Project Type | CloudFront? | Custom Resources | Description | Link |
| ------------- | -------- | ------------ | ----------- | ---------------- | ----------- | ---- |
| [`0-basic-srp-pug`](0-basic-srp-pug) | Node.js | Server-rendered pages | yes |  | Simple app that renders pug templates server-side | [Link](https://d1pxopg24eq7dd.cloudfront.net/hello/bar) |
| [`1-basic-spa`](1-basic-spa) | Node.js | Single-page-app | yes |  | Basic Single-page-app that serves an index.html file which gets information from the API | [Link](https://d27t71oh6azhyg.cloudfront.net/) |
| [`2-basic-python`](2-basic-python) | Python 2.7 | Server-rendered | yes |  | Server-rendered pages in Python 2.7 | [Link](https://d3syf393e0no8b.cloudfront.net/test) |
