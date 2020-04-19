# alexchavez.codes

The personal website of Alex Chavez. All serverless. Built on AWS.

## Website Architecture

Below architecture diagram shows how S3/CloudFront hosts this site using HTTPS:

![Website Architectures of alexchavez.codes](img/website-architecture.png)

## Site Deployment

Mostly for future Alex when he inevitably abandons the site and tries to remember what he did a couple of years ago...

### First Time Deployment of Site

I originally provisioned and configured the services needed for my site using the AWS Console. I ended up creating a CloudFormation (not to be confused with **CloudFront** btw) template using [CloudFormer](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-using-cloudformer.html) after the fact. You'll want to modify the CloudFormation template under `infra/cloudformation.json` if you would like to autonomously provision needed AWS infrastructure using CloudFormation.

As of April 2020, CloudFormation doesn't support AWS Certificate Manager so you'll have to create your own SSL certificate using the AWS Console. In addition, I had to configure my domain's DNS records on Namecheap to point to Route53. Buying your domain through Route53 will save you a couple of steps.

### Updating the Site

Push or approve PR changes into the **master** branch. Github Actions defined in `.github/workflows/pipeline.yml` will build the Webpack project, sync contents from the `dist/` subdirectory to the S3 bucket, then send a request to CloudFormation to invalidate the distribution's cache to propogate site changes across all AWS edge locations.

## Site Frontend Development With Gatsby

1. **Checkout repo and install dependencies from `package.json`.**

    npm install

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd alexchavez.codes/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!