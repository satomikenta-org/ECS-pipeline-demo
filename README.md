# ECS-pipeline-demo
Auto Deploy to ECS Fargate with CodePipeline.

Requirements

・CodeCommit
・CodeBuild 
・CodePipeline

* Need to attach "EC2ContainerRepositoryPowerUser" policy to CodeBuild's role in order to push Docker image to ECR.

***** CodeBuild Settings ***** 
"Managed Image".
os "Ubuntu".
runtime "Standard".
"Privileged".
artifacts "no artifacts".
******************************
