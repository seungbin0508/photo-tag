# Photo-Tag

## Index
- Overview
- Features
- Schedule
- Server Environment
- Architecture
- Database Structure
- Sample Codes

## Overview
Web photo share and search service by auto generated tags from image using [Kakao's Multi-tag creation API](https://developers.kakao.com/docs/latest/en/vision/dev-guide#create-multi-tag). It is a toy project, and any suggestions are welcome! Please contribute via [GitHub issue](https://github.com/seungbin0508/photo-tag/issues).

## Features

## Schedule
| Part | Start | End | Detail |
| ----- | --- | --- | --- |
| Project Setting | November 2021 | On Going | Basic architecture settings, readme, etc. |


## Server Environment
|Environment|Content|
| --- | ---- |
| Language | Node.js 17.x (ES 2021) |
| Framework | Express.js 4.17 |
| Main Database | MongoDB 4.2 ([MongoDB Atlas](https://www.mongodb.com/atlas)) |
| Sub Database | Redis 6.2.3 ([Redis Cloud](https://app.redislabs.com/))
| Deployment | AWS EC2, S3 (for images) |
| Image Analysing API | [Kakao](https://developers.kakao.com) |

## Architecture

## Database Structure
![Database Structure Image](https://user-images.githubusercontent.com/24871719/143405318-332ef190-37ab-4559-b73b-daed56c8ecd6.png)

## SampleCodes