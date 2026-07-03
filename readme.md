# Rate Limiting with Express.js

A simple IP-based rate limiting project built using Node.js and Express.js.

## Features

* Limits users to 5 requests
* Request limit resets every 10 seconds
* Returns `429 Too Many Requests` when the limit is exceeded
* Uses Express middleware for rate limiting

## Installation

```bash
npm install
```

## Run the Project

```bash
node index.js
```

Server runs at:

```text
http://localhost:3000
```

## Tech Stack

* Node.js
* Express.js
* JavaScript
