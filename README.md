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

| Example name  | Project Type | CloudFront? | Custom Resources | Description |
| ------------- | ------------ | ----------- | ---------------- | ----------- |
| [`0-basic-srp-pug`](0-basic-srp-pug) | Server-rendered pages | yes |  | Simple app that renders pug templates server-side |
| [`1-basic-spa`](1-basic-spa) | Single-page-app | yes |  | Basic Single-page-app that serves an index.html file which gets information from the API |
